/** Persistência local (só neste navegador). Tudo protegido com try/catch. */

export interface ItemStats {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
}

export interface Flag {
  note: string;
  date: string;
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* sem armazenamento disponível: segue sem salvar */
  }
}

const STATS = "ej.stats.v1";
const FLAGS = "ej.flags.v1";
const SETTINGS = "ej.settings.v1";

export function getStats(): Record<string, ItemStats> {
  return read(STATS, {});
}

export function recordAnswer(id: string, correct: boolean) {
  const all = getStats();
  const s = all[id] ?? { attempts: 0, correct: 0, lastCorrect: false };
  all[id] = { attempts: s.attempts + 1, correct: s.correct + (correct ? 1 : 0), lastCorrect: correct };
  write(STATS, all);
}

export function getFlags(): Record<string, Flag> {
  return read(FLAGS, {});
}

export function setFlag(id: string, note: string | null) {
  const all = getFlags();
  if (note === null) delete all[id];
  else all[id] = { note, date: new Date().toISOString() };
  write(FLAGS, all);
}

export interface Settings {
  furigana: boolean;
  /** Módulo escolhido por último (ex.: "jlpt-n5-grammar"). */
  moduleId?: string;
}

export function getSettings(): Settings {
  return read(SETTINGS, { furigana: true });
}

export function saveSettings(s: Settings) {
  write(SETTINGS, s);
}
