import { useMemo, useState } from "react";
import { MODULES } from "../content/index.ts";
import type { GrammarModule, GrammarPoint } from "../content/schema.ts";
import { GrammarCard } from "./components/GrammarCard.tsx";
import { QuestionView } from "./components/QuestionView.tsx";
import { plain, RichInline } from "./lib/rich.tsx";
import {
  allItems,
  buildExam,
  buildPractice,
  itemAnswer,
  itemGrammarPoints,
  TYPE_LABEL,
  type SessionItem,
} from "./lib/session.ts";
import { getFlags, getSettings, getStats, recordAnswer, saveSettings, setFlag } from "./lib/storage.ts";

type Screen =
  | { name: "home" }
  | { name: "quiz"; title: string; items: SessionItem[] }
  | { name: "results"; title: string; items: SessionItem[]; choices: number[] }
  | { name: "grammar" }
  | { name: "flags" };

export function App() {
  const mod: GrammarModule = MODULES[0];
  const [screen, setScreen] = useState<Screen>({ name: "home" });
  const [furigana, setFurigana] = useState(getSettings().furigana);
  const points = useMemo(() => new Map(mod.points.map((p) => [p.id, p])), [mod]);

  function toggleFurigana() {
    const v = !furigana;
    setFurigana(v);
    saveSettings({ furigana: v });
  }

  return (
    <div className={`app ${furigana ? "" : "no-furigana"}`}>
      <header className="topbar">
        <button className="brand link" onClick={() => setScreen({ name: "home" })}>
          日本語 · Estudo de Japonês
        </button>
        <nav>
          <button className="link" onClick={() => setScreen({ name: "grammar" })}>
            Regras
          </button>
          <button className="link" onClick={() => setScreen({ name: "flags" })}>
            Marcadas
          </button>
          <label className="furigana-toggle">
            <input type="checkbox" checked={furigana} onChange={toggleFurigana} /> furigana
          </label>
        </nav>
      </header>

      <main>
        {screen.name === "home" && <Home mod={mod} start={(title, items) => setScreen({ name: "quiz", title, items })} />}
        {screen.name === "quiz" && (
          <Quiz
            key={screen.items.map((i) => i.id).join()}
            title={screen.title}
            items={screen.items}
            points={points}
            onFinish={(choices) => setScreen({ name: "results", title: screen.title, items: screen.items, choices })}
          />
        )}
        {screen.name === "results" && (
          <Results
            {...screen}
            points={points}
            retry={(items) => setScreen({ name: "quiz", title: "Refazer as que errei", items })}
            home={() => setScreen({ name: "home" })}
          />
        )}
        {screen.name === "grammar" && <GrammarList mod={mod} />}
        {screen.name === "flags" && <Flags mod={mod} />}
      </main>
    </div>
  );
}

function Home({ mod, start }: { mod: GrammarModule; start: (title: string, items: SessionItem[]) => void }) {
  const items = allItems(mod);
  const stats = getStats();
  const wrongOnes = items.filter((it) => stats[it.id] && !stats[it.id].lastCorrect);
  const unseen = items.filter((it) => !stats[it.id]);
  const f = mod.examFormat;
  const examSize = f.mondai1 + f.mondai2 + mod.mondai3.slice(0, f.mondai3Passages).reduce((n, p) => n + p.blanks.length, 0);
  const [pointId, setPointId] = useState("");

  return (
    <div className="home">
      <h1>
        {mod.exam} {mod.level} · {mod.title}
      </h1>
      <p>{mod.description}</p>
      <p className="muted">
        Banco atual: {mod.mondai1.length} questões de もんだい1, {mod.mondai2.length} de もんだい2 e {mod.mondai3.length} textos de
        もんだい3 ({items.length} itens no total). Você já respondeu {items.length - unseen.length}.
      </p>

      <div className="modes">
        <button className="mode primary" onClick={() => start("Simulado no formato da prova", buildExam(mod))}>
          <strong>Simulado no formato da prova</strong>
          <span>
            {examSize} itens: {f.mondai1} de もんだい1 + {f.mondai2} de もんだい2 + {f.mondai3Passages} texto de もんだい3, sorteados.
          </span>
        </button>
        <button className="mode" onClick={() => start("Treino com todas as questões", buildPractice(items))}>
          <strong>Treino com todas</strong>
          <span>Todas as {items.length} em ordem aleatória.</span>
        </button>
        <button className="mode" disabled={unseen.length === 0} onClick={() => start("Questões que ainda não vi", buildPractice(unseen))}>
          <strong>Só as que ainda não vi</strong>
          <span>{unseen.length} itens.</span>
        </button>
        <button className="mode" disabled={wrongOnes.length === 0} onClick={() => start("Revisar as que errei", buildPractice(wrongOnes))}>
          <strong>Revisar as que errei</strong>
          <span>{wrongOnes.length} itens (errados na última tentativa).</span>
        </button>
        {(["mondai1", "mondai2", "mondai3"] as const).map((k) => (
          <button key={k} className="mode" onClick={() => start(TYPE_LABEL[k], buildPractice(items.filter((i) => i.kind === k)))}>
            <strong>{TYPE_LABEL[k]}</strong>
            <span>{items.filter((i) => i.kind === k).length} itens.</span>
          </button>
        ))}
      </div>

      <div className="by-point">
        <label>
          Treinar um ponto gramatical:{" "}
          <select value={pointId} onChange={(e) => setPointId(e.target.value)}>
            <option value="">— escolha —</option>
            {mod.points.map((p) => {
              const n = items.filter((it) => itemGrammarPoints(it).includes(p.id)).length;
              return (
                <option key={p.id} value={p.id} disabled={n === 0}>
                  {plain(p.title)} — {plain(p.meaning)} ({n})
                </option>
              );
            })}
          </select>
        </label>
        <button
          disabled={!pointId}
          onClick={() => {
            const p = mod.points.find((x) => x.id === pointId)!;
            start(`Ponto: ${plain(p.title)}`, buildPractice(items.filter((it) => itemGrammarPoints(it).includes(pointId))));
          }}
        >
          Começar
        </button>
      </div>

      <div className="about">
        <h2>Sobre o conteúdo</h2>
        <p>
          As questões são originais, escritas no formato das provas oficiais de exemplo do JLPT N4 (Japan Foundation / JEES). Cada
          questão passou por revisão alternativa por alternativa e as regras foram conferidas em mais de uma fonte — a lista de fontes
          aparece em cada regra. Se algo parecer errado, use “Marcar esta questão para revisão” e anote o motivo.
        </p>
        <p>
          Atalhos: teclas 1–4 para responder, Enter para avançar.
        </p>
      </div>
    </div>
  );
}

function Quiz({
  title,
  items,
  points,
  onFinish,
}: {
  title: string;
  items: SessionItem[];
  points: Map<string, GrammarPoint>;
  onFinish: (choices: number[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);
  const [answeredBlanks, setAnsweredBlanks] = useState<Record<string, Record<number, boolean>>>({});
  const item = items[index];

  return (
    <div className="quiz">
      <div className="quiz-title">{title}</div>
      <div className="progress">
        <div className="bar" style={{ width: `${(index / items.length) * 100}%` }} />
      </div>
      <QuestionView
        item={item}
        index={index}
        total={items.length}
        points={points}
        answeredBlanks={answeredBlanks}
        onAnswered={(choice, correct) => {
          recordAnswer(item.id, correct);
          setChoices((c) => {
            const n = [...c];
            n[index] = choice;
            return n;
          });
          if (item.kind === "mondai3") {
            setAnsweredBlanks((a) => ({
              ...a,
              [item.passage.id]: { ...(a[item.passage.id] ?? {}), [item.blank.number]: true },
            }));
          }
        }}
        onNext={() => {
          if (index + 1 < items.length) {
            setIndex(index + 1);
            window.scrollTo({ top: 0 });
          } else onFinish(choices);
        }}
      />
    </div>
  );
}

function Results({
  title,
  items,
  choices,
  points,
  retry,
  home,
}: {
  title: string;
  items: SessionItem[];
  choices: number[];
  points: Map<string, GrammarPoint>;
  retry: (items: SessionItem[]) => void;
  home: () => void;
}) {
  const results = items.map((it, i) => ({ it, ok: choices[i] === itemAnswer(it) }));
  const wrong = results.filter((r) => !r.ok).map((r) => r.it);
  const score = results.length - wrong.length;
  const byType = (["mondai1", "mondai2", "mondai3"] as const)
    .map((k) => {
      const r = results.filter((x) => x.it.kind === k);
      return { k, total: r.length, ok: r.filter((x) => x.ok).length };
    })
    .filter((x) => x.total > 0);
  const missedPoints = [...new Set(wrong.flatMap((it) => itemGrammarPoints(it)))]
    .map((id) => points.get(id))
    .filter((p): p is GrammarPoint => !!p);

  return (
    <div className="results">
      <h1>Resultado</h1>
      <p className="muted">{title}</p>
      <p className="score">
        {score} / {results.length} ({Math.round((score / results.length) * 100)}%)
      </p>
      <ul>
        {byType.map((t) => (
          <li key={t.k}>
            {TYPE_LABEL[t.k]}: {t.ok}/{t.total}
          </li>
        ))}
      </ul>
      {missedPoints.length > 0 && (
        <>
          <h2>Regras para revisar</h2>
          {missedPoints.map((p) => (
            <GrammarCard key={p.id} point={p} open={false} />
          ))}
        </>
      )}
      <div className="actions">
        {wrong.length > 0 && (
          <button className="primary" onClick={() => retry(buildPractice(wrong))}>
            Refazer as {wrong.length} que errei
          </button>
        )}
        <button onClick={home}>Início</button>
      </div>
    </div>
  );
}

function GrammarList({ mod }: { mod: GrammarModule }) {
  const [q, setQ] = useState("");
  const filtered = mod.points.filter((p) => !q || `${p.title} ${p.meaning}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="grammar-list">
      <h1>Regras gramaticais — {mod.level}</h1>
      <p className="muted">{mod.points.length} pontos cobertos pelas questões atuais.</p>
      <input className="search" placeholder="Buscar (ex.: ように, passiva, condicional)" value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((p) => (
        <GrammarCard key={p.id} point={p} open={false} />
      ))}
    </div>
  );
}

function Flags({ mod }: { mod: GrammarModule }) {
  const [flags, setFlags] = useState(getFlags());
  const items = allItems(mod);
  const entries = Object.entries(flags);
  const exportText = JSON.stringify(flags, null, 2);
  return (
    <div className="flags">
      <h1>Questões marcadas para revisão</h1>
      {entries.length === 0 && <p>Nenhuma questão marcada.</p>}
      <ul>
        {entries.map(([id, f]) => {
          const it = items.find((x) => x.id === id);
          const text =
            it?.kind === "mondai1" ? it.q.prompt : it?.kind === "mondai2" ? `${it.q.before} ＿＿ ＿＿ ＿＿ ＿＿ ${it.q.after}` : it?.kind === "mondai3" ? `${it.passage.title} — lacuna ${it.blank.number}` : "(questão removida)";
          return (
            <li key={id}>
              <div className="ja">
                <RichInline text={text} />
              </div>
              <div className="muted">
                {id} · {new Date(f.date).toLocaleString("pt-BR")}
              </div>
              <div>{f.note || <em>sem anotação</em>}</div>
              <button
                className="link"
                onClick={() => {
                  setFlag(id, null);
                  setFlags(getFlags());
                }}
              >
                remover
              </button>
            </li>
          );
        })}
      </ul>
      {entries.length > 0 && (
        <>
          <p>Para me mandar as marcações, copie o bloco abaixo:</p>
          <textarea className="export" readOnly value={exportText} rows={8} />
        </>
      )}
    </div>
  );
}
