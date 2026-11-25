import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent finished the entry at 2:35 a.m., then waited so politely for my approval that the 5:12 deadline passed — it submitted perfect silence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
