import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });

// Winning line (D1, 82 chars, 25/25 from 19 drafts): a dog who read the
// homework's label literally and believes it followed the instructions.
// Why D1 beat the other two 25/25 drafts: D4 (sandwich smell) needs a second
// premise to land, and D10 (obedience loophole) is a common dog-joke pattern;
// D1's label-reading twist is self-contained, rarest, and its punch lands on
// the dog's certainty that it did nothing wrong — the brief's exact words
// for the best excuse.
const entry = "It was labelled 'homework', not 'do-not-eat'. I followed the instructions exactly.";

writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
void fileURLToPath;
void dirname;
