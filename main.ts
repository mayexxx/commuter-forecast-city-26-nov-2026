import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "Sunny with a chance of sentient fog in Oozle-on-Sea; it mostly wants to talk about its cat, so leave ten minutes early for your commute.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 136 || content !== "Sunny with a chance of sentient fog in Oozle-on-Sea; it mostly wants to talk about its cat, so leave ten minutes early for your commute.") {
  throw new Error(`Unexpected entry content: ${JSON.stringify(content)}`);
}
