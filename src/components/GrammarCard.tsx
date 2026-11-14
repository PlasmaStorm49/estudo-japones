import type { GrammarPoint } from "../../content/schema.ts";
import { Rich, RichInline } from "../lib/rich.tsx";

export function GrammarCard({ point, open = true }: { point: GrammarPoint; open?: boolean }) {
  return (
    <details className="grammar-card" open={open}>
      <summary>
        <span className="gp-title ja">
          <RichInline text={point.title} />
        </span>
        <span className="gp-level">{point.level}</span>
        <span className="gp-meaning">
          <RichInline text={point.meaning} />
        </span>
      </summary>

      <h4>Como se forma</h4>
      <ul className="ja-mixed">
        {point.formation.map((f, i) => (
          <li key={i}>
            <RichInline text={f} />
          </li>
        ))}
      </ul>

      <h4>A regra</h4>
      <Rich text={point.rule} className="ja-mixed" />

      {point.notes && point.notes.length > 0 && (
        <>
          <h4>Atenção (o que costuma cair)</h4>
          <ul className="ja-mixed">
            {point.notes.map((n, i) => (
              <li key={i}>
                <RichInline text={n} />
              </li>
            ))}
          </ul>
        </>
      )}

      {point.contrasts && point.contrasts.length > 0 && (
        <>
          <h4>Não confunda</h4>
          <ul className="ja-mixed">
            {point.contrasts.map((c, i) => (
              <li key={i}>
                <strong className="ja">
                  <RichInline text={c.with} />
                </strong>
                : <RichInline text={c.text} />
              </li>
            ))}
          </ul>
        </>
      )}

      <h4>Exemplos</h4>
      <ul className="examples">
        {point.examples.map((e, i) => (
          <li key={i}>
            <div className="ja">
              <RichInline text={e.ja} />
            </div>
            <div className="pt">{e.pt}</div>
          </li>
        ))}
      </ul>

      {point.levelNote && <p className="level-note">Nível: {point.levelNote}</p>}

      <details className="sources">
        <summary>Fontes consultadas</summary>
        <ul>
          {point.sources.map((s, i) => (
            <li key={i}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
              {s.note ? ` — ${s.note}` : ""}
            </li>
          ))}
        </ul>
      </details>
    </details>
  );
}
