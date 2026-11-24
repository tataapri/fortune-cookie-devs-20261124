import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Your cleanest rewrite will one day be the legacy code someone else curses.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
