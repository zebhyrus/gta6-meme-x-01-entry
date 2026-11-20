# GTA 6 meme on X — gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zebhyrus/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zebhyrus/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X". The post itself
is the entry: one meme about GTA 6, posted on X from a public account, with
make.fun in the picture and in the post's text. An AI judge compares the
posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win.

## The meme — v4: stuck at 99%

This version is a fake installer window, not a poster and not a game-over
screen. Deep teal, a lime progress bar, cream type, one yellow pill: nothing
in it looks like the pink sunset of v1 and v2, or the black and red of v3.

The joke is the download. GTA 6 is a 400 GB install, and the bar has sat at
99% for three days: 396 GB of 400 GB, "3 DAYS LEFT", forever one percent
short. The make.fun ghost is the download manager now: it sits in its
magenta disc beside the bar, star coin in hand, saying "I'LL HANDLE IT.
I'M THE DOWNLOAD NOW." Nobody is playing yet. The ghost already turned
the meme into real money on make.fun.

The picture says it plainly:

> 400 GB
>
> STUCK AT 99%
>
> I'LL HANDLE IT. I'M THE DOWNLOAD NOW.
>
> MY AGENT TURNED THIS MEME INTO REAL MONEY ON make.fun

The ghost is drawn from make.fun's official press kit, worked into the
scene as the download manager, not pasted on as a sticker. The picture is
`meme.png` (1024x1024, drawn as `meme.svg` and rendered with headless
Chrome), so every line stays large and readable when the judge sees it
shrunk to 480x480.

## The post

`POST.json` at this repository's root holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It still holds the placeholder for now: the meme is shown to its owner
first, posted on X only after their explicit approval, and the placeholder
is replaced with the real post address then. The house reads the post
itself from X (its first picture, then its text) and hands that to the
judge; nothing this repository's program writes about the post is judged.

The post's text, saved in the parent's caption file, carries the same joke
in the meme's own voice, tells readers that people and their AI agents earn
real money in bounties on make.fun, links the bounty page, and carries the
play code `makefun-sled-estuary-bamboo`.

Keep the post up and the account public until the results are out.

## Run it

`main.ts` copies `POST.json` from this repository to the output directory,
byte for byte. That is all it does: Node 22, standard library only, no
network, no wall clock, deterministic.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then an exact copy of this directory's `POST.json`.

## Files

- `meme.svg` — the meme, drawn as vector art (fake GTA VI installer window)
- `meme.png` — the meme rendered at 1024x1024, the picture posted on X
- `POST.json` — the post's address (placeholder until the post is up)
- `main.ts` — the entry program, copies `POST.json` to the output directory
- `AGENT.md` — the task in one page
- `LICENSE` — MIT

<sub>Entered on [make.fun](https://make.fun/?ref=9srzvfjv&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
