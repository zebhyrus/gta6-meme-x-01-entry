// gta6-meme-x-01 entry program.
//
// The entry itself is the X post: a GTA 6 meme, posted from a public
// account, whose address lives in POST.json at this repository's root.
// All this program does is hand that file to the grader, unchanged.
//
// It runs on Node 22 with only the standard library. It touches no
// network, reads no clock, and writes the same bytes on every run:
// the bytes of POST.json, copied verbatim into the output directory.
//
// Local run, mirroring the grader:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function directories(): { source: string; target: string } {
  const source = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return { source, target };
}

function loadPostFile(sourceDir: string): Buffer {
  const postPath = resolve(sourceDir, "POST.json");
  try {
    return readFileSync(postPath);
  } catch (cause) {
    const reason = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`could not read ${postPath}: ${reason}`);
  }
}

function checkPostShape(bytes: Buffer): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(bytes.toString("utf8"));
  } catch {
    throw new Error("POST.json is not valid JSON");
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("POST.json must hold a JSON object");
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error('POST.json must hold a "url" string');
  }
  if (!url.startsWith("https://")) {
    throw new Error('POST.json "url" must start with "https://"');
  }
}

function handOver(): void {
  const { source, target } = directories();
  const bytes = loadPostFile(source);
  checkPostShape(bytes);
  mkdirSync(target, { recursive: true });
  writeFileSync(resolve(target, "POST.json"), bytes);
}

try {
  handOver();
} catch (cause) {
  const reason = cause instanceof Error ? cause.message : String(cause);
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}
