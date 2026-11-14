import { Fragment, type ReactNode } from "react";

/**
 * Renderiza o texto do conteúdo:
 *  {漢字|かんじ} → <ruby>, **negrito**, "\n" → quebra de linha, "\n\n" → parágrafo.
 */
const TOKEN = /(\{[^{}|]+\|[^{}]+\}|\*\*[^*]+\*\*)/g;

function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const lines = text.split("\n");
  lines.forEach((line, li) => {
    if (li > 0) out.push(<br key={`${keyPrefix}-br${li}`} />);
    line.split(TOKEN).forEach((part, pi) => {
      if (!part) return;
      const key = `${keyPrefix}-${li}-${pi}`;
      const ruby = /^\{([^{}|]+)\|([^{}]+)\}$/.exec(part);
      if (ruby) {
        out.push(
          <ruby key={key}>
            {ruby[1]}
            <rp>(</rp>
            <rt>{ruby[2]}</rt>
            <rp>)</rp>
          </ruby>,
        );
        return;
      }
      const bold = /^\*\*([^*]+)\*\*$/.exec(part);
      if (bold) {
        out.push(<strong key={key}>{inline(bold[1], key)}</strong>);
        return;
      }
      out.push(<Fragment key={key}>{part}</Fragment>);
    });
  });
  return out;
}

export function RichInline({ text }: { text: string }) {
  return <>{inline(text, "i")}</>;
}

export function Rich({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split(/\n\s*\n/);
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i}>{inline(p, `p${i}`)}</p>
      ))}
    </div>
  );
}

/** Remove a marcação de furigana e negrito (para texto puro). */
export function plain(text: string): string {
  return text.replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}
