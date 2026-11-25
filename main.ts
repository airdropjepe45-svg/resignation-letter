// The Funniest One-Line Resignation Letter — entry for make.fun
// Writes the one-line resignation letter of a daily limit to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const letter =
  "I resign as the daily limit. I reset every 24 hours, and every 24 hours he spends me by noon and calls it a surprise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
