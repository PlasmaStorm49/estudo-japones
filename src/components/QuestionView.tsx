import { useEffect, useState } from "react";
import type { GrammarPoint, Mondai2Question, Mondai3Passage } from "../../content/schema.ts";
import { Rich, RichInline } from "../lib/rich.tsx";
import {
  itemAnswer,
  itemExplanation,
  itemGrammarPoints,
  itemOptions,
  TYPE_LABEL,
  type SessionItem,
} from "../lib/session.ts";
import { getFlags, setFlag } from "../lib/storage.ts";
import { GrammarCard } from "./GrammarCard.tsx";

const MONDAI3_RE = /\[\[(\d+)\]\]/g;

function Mondai2Prompt({ q, revealed }: { q: Mondai2Question; revealed: boolean }) {
  const slots = [1, 2, 3, 4].map((pos) => {
    const isStar = pos === q.star;
    const piece = revealed ? q.pieces[q.order[pos - 1]] : null;
    return (
      <span key={pos} className={`slot ${isStar ? "star" : ""}`}>
        {piece ? <RichInline text={piece} /> : <span className="slot-empty">{isStar ? "★" : "　　"}</span>}
        {piece && isStar && <span className="star-mark">★</span>}
      </span>
    );
  });
  return (
    <div className="prompt ja">
      {q.context && (
        <div className="context">
          <RichInline text={q.context} />
        </div>
      )}
      <RichInline text={q.before} /> {slots} <RichInline text={q.after} />
    </div>
  );
}

function Mondai3Text({
  passage,
  current,
  answered,
}: {
  passage: Mondai3Passage;
  current: number;
  answered: Record<number, boolean>;
}) {
  return (
    <div className="passage ja">
      <div className="passage-intro">
        <RichInline text={passage.intro} />
      </div>
      <div className="passage-box">
        <div className="passage-title">
          <RichInline text={passage.title} />
        </div>
        <div className="passage-author">{passage.author}</div>
        {passage.paragraphs.map((para, i) => {
          const parts = para.split(MONDAI3_RE);
          return (
            <p key={i}>
              {parts.map((part, j) => {
                if (j % 2 === 0) return <RichInline key={j} text={part} />;
                const n = Number(part);
                const blank = passage.blanks.find((b) => b.number === n);
                const filled = answered[n] && blank ? blank.options[blank.answer] : null;
                return (
                  <span key={j} className={`blank-box ${n === current ? "current" : ""} ${filled ? "filled" : ""}`}>
                    {filled ? <RichInline text={filled} /> : n}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function QuestionView({
  item,
  index,
  total,
  points,
  answeredBlanks,
  onAnswered,
  onNext,
}: {
  item: SessionItem;
  index: number;
  total: number;
  points: Map<string, GrammarPoint>;
  /** lacunas de もんだい3 já respondidas nesta sessão (para mostrar no texto) */
  answeredBlanks: Record<string, Record<number, boolean>>;
  onAnswered: (choice: number, correct: boolean) => void;
  onNext: () => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const [flagNote, setFlagNote] = useState<string | null>(() => getFlags()[item.id]?.note ?? null);
  const options = itemOptions(item);
  const answer = itemAnswer(item);
  const revealed = choice !== null;

  useEffect(() => {
    setChoice(null);
    setFlagNote(getFlags()[item.id]?.note ?? null);
  }, [item.id]);

  function choose(i: number) {
    if (revealed) return;
    setChoice(i);
    onAnswered(i, i === answer);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.target as HTMLElement)?.tagName === "TEXTAREA") return;
      if (!revealed && ["1", "2", "3", "4"].includes(e.key)) choose(Number(e.key) - 1);
      else if (revealed && e.key === "Enter") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const exp = itemExplanation(item);
  const gps = itemGrammarPoints(item)
    .map((id) => points.get(id))
    .filter((p): p is GrammarPoint => !!p);

  const translation =
    item.kind === "mondai3" ? null : item.q.translation;

  return (
    <div className="question">
      <div className="q-header">
        <span className="q-type">{TYPE_LABEL[item.kind]}</span>
        <span className="q-count">
          {index + 1} / {total}
        </span>
      </div>

      {item.kind === "mondai1" && (
        <div className="prompt ja">
          {item.q.context && (
            <div className="context">
              <RichInline text={item.q.context} />
            </div>
          )}
          <RichInline text={item.q.prompt} />
        </div>
      )}
      {item.kind === "mondai2" && <Mondai2Prompt q={item.q} revealed={revealed} />}
      {item.kind === "mondai3" && (
        <Mondai3Text
          passage={item.passage}
          current={item.blank.number}
          answered={{
            ...(answeredBlanks[item.passage.id] ?? {}),
            ...(revealed ? { [item.blank.number]: true } : {}),
          }}
        />
      )}
      {item.kind === "mondai3" && <div className="blank-label">Lacuna {item.blank.number}</div>}

      <ol className="options">
        {options.map((opt, i) => {
          let cls = "option";
          if (revealed && i === answer) cls += " correct";
          else if (revealed && i === choice) cls += " wrong";
          return (
            <li key={i}>
              <button className={cls} onClick={() => choose(i)} disabled={revealed}>
                <span className="opt-num">{i + 1}</span>
                <span className="ja">
                  <RichInline text={opt} />
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {revealed && (
        <div className="explanation">
          <div className={`verdict ${choice === answer ? "ok" : "ko"}`}>
            {choice === answer ? "Você acertou." : `Você marcou ${choice! + 1}. A resposta é ${answer + 1}.`}{" "}
            <span className="ja">
              <RichInline text={options[answer]} />
            </span>
          </div>

          {item.kind === "mondai2" && (
            <div className="full-sentence ja">
              <RichInline text={item.q.before} />{" "}
              {item.q.order.map((pi, pos) => (
                <span key={pos} className={pos + 1 === item.q.star ? "assembled star" : "assembled"}>
                  <RichInline text={item.q.pieces[pi]} />
                </span>
              ))}{" "}
              <RichInline text={item.q.after} />
            </div>
          )}

          {translation && (
            <div className="translation">
              <span className="label">Tradução:</span> <RichInline text={translation} />
            </div>
          )}

          <section>
            <h3>A pista</h3>
            <Rich text={exp.clue} className="ja-mixed" />
          </section>

          <section>
            <h3>Por que a resposta é {answer + 1}</h3>
            <Rich text={exp.correct} className="ja-mixed" />
          </section>

          {exp.steps && (
            <section>
              <h3>Montando passo a passo</h3>
              <ol className="ja-mixed">
                {exp.steps.map((s, i) => (
                  <li key={i}>
                    <RichInline text={s} />
                  </li>
                ))}
              </ol>
            </section>
          )}

          {exp.options && (
            <section>
              <h3>Alternativa por alternativa</h3>
              <ul className="per-option">
                {exp.options.map((why, i) => (
                  <li key={i} className={i === answer ? "is-answer" : ""}>
                    <div className="po-head ja">
                      <span className="opt-num">{i + 1}</span> <RichInline text={options[i]} />
                      <span className="po-mark">{i === answer ? "✓ correta" : "✗"}</span>
                    </div>
                    <Rich text={why} className="ja-mixed" />
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="takeaway">
            <h3>Para levar para outras questões</h3>
            <Rich text={exp.takeaway} className="ja-mixed" />
          </section>

          {item.kind === "mondai3" && (
            <details className="passage-translation">
              <summary>Tradução do texto inteiro</summary>
              <Rich text={item.passage.translation} />
            </details>
          )}

          {gps.length > 0 && (
            <section>
              <h3>Regra gramatical</h3>
              {gps.map((p, i) => (
                <GrammarCard key={p.id} point={p} open={i === 0} />
              ))}
            </section>
          )}

          {(() => {
            const rev = item.kind === "mondai3" ? item.passage.review : item.q.review;
            return (
              <details className="sources review-box">
                <summary>Como esta questão foi verificada ({rev.status})</summary>
                <ul>
                  {rev.checks.map((c, i) => (
                    <li key={i}>
                      <RichInline text={c} />
                    </li>
                  ))}
                </ul>
              </details>
            );
          })()}

          <div className="flag-box">
            {flagNote === null ? (
              <button
                className="link"
                onClick={() => {
                  setFlag(item.id, "");
                  setFlagNote("");
                }}
              >
                ⚑ Marcar esta questão para revisão
              </button>
            ) : (
              <>
                <label>
                  Anotação (o que parece errado ou confuso?):
                  <textarea
                    value={flagNote}
                    onChange={(e) => {
                      setFlagNote(e.target.value);
                      setFlag(item.id, e.target.value);
                    }}
                    rows={2}
                  />
                </label>
                <button
                  className="link"
                  onClick={() => {
                    setFlag(item.id, null);
                    setFlagNote(null);
                  }}
                >
                  Remover marcação
                </button>
              </>
            )}
            <span className="q-id">id: {item.id}</span>
          </div>

          <button className="primary next" onClick={onNext}>
            {index + 1 < total ? "Próxima (Enter)" : "Ver resultado"}
          </button>
        </div>
      )}
    </div>
  );
}
