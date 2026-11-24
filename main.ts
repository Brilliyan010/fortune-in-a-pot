// Fortune in a Pot — make.fun entry.
// Writes one houseplant fortune, at most 120 characters, to /output/entry.txt.
// The line is the whole entry. The fortune: a bigger pot in spring, sun on
// the plant's leaves, and a keeper who talks to the plant royally — with the
// punch that the plant trained the keeper, not the other way round.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your fortune: a bigger pot in spring, sun on your leaves, and a keeper who talks to you like royalty. You trained them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
