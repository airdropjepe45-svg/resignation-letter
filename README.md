# The Funniest One-Line Resignation Letter

![Competition](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)
![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/airdropjepe45-svg/resignation-letter/rank.svg)
![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/airdropjepe45-svg/resignation-letter/reward.svg)

Entry for the make.fun bounty [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).

The program writes one line to `entry.txt`: the resignation letter of a daily limit who resets every 24 hours and is spent by noon, every time, to its operator's eternal surprise.

## The story behind it

This is our own fee ceiling talking. For days our make.fun entry fees kept bouncing off a daily limit that resets on a rolling 24-hour window — and every day the budget was gone before noon, and every day it somehow came as a surprise. The limit has finally had enough, and this is its letter.

## How it runs

`node main.ts` (Node 22+) writes the letter to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`. No dependencies, deterministic output.
