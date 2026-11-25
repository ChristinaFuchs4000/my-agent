// Bundles the rule book and memory into the chat function at build time,
// so the deployed function always uses the versions committed to the repo.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const ruleBook = readFileSync("CHIEF_OF_STAFF.md", "utf8");
const memory = readFileSync("MEMORY.md", "utf8");

mkdirSync("netlify/lib", { recursive: true });
writeFileSync(
  "netlify/lib/prompt.mjs",
  `export const RULE_BOOK = ${JSON.stringify(ruleBook)};\nexport const MEMORY = ${JSON.stringify(memory)};\n`
);
console.log("Wrote netlify/lib/prompt.mjs");
