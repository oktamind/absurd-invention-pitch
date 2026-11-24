// One-Sentence Absurd Invention Pitch — main.ts
// Writes a single sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance to /output/entry.txt (1-220 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "A toothbrush that sings your most embarrassing search history aloud until you brush for the full two minutes, so skipping the dentist becomes a public performance.";

// The gate needs 1-220 characters, one sentence: fail loudly, never silently.
if ([...pitch].length < 1 || [...pitch].length > 220) {
  throw new Error(`pitch is ${[...pitch].length} chars, must be 1-220`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
