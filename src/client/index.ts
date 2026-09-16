import { env } from "bun";
import { NyaitterClient } from "./nyaitterjs";
import { createRatelimitedFetch } from "./ratelimit";

const baseUrl = env.NYAITTER_BASE_URL;
const token = env.NYAITTER_TOKEN;
const ratelimit_counts = Number(env.NYAITTER_RATELIMIT_COUNTS ?? "10");
const ratelimit_secs = Number(env.NYAITTER_RATELIMIT_SECS ?? "60");

if (!baseUrl) {
  console.error("NYAITTER_BASE_URL環境変数を定義してください");
  process.exit(1);
}
if (!token) {
  console.warn("NYAITTER_TOKEN環境変数を定義することを推奨します");
}
if (isNaN(ratelimit_counts)) {
  console.error("NYAITTER_RATELIMIT_CONUTS環境変数の値が不正です");
  process.exit(1);
}
if (isNaN(ratelimit_secs)) {
  console.error("NYAITTER_RATELIMIT_SECS環境変数の値が不正です");
  process.exit(1);
}

export const client = new NyaitterClient({
  baseUrl, token,
  fetch: createRatelimitedFetch(ratelimit_counts, ratelimit_secs),
  WebSocket: require("ws"),
});

export const realtime = client.realtime();
await realtime.connect();
