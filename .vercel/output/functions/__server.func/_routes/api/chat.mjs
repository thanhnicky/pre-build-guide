import { d as defineEventHandler, r as readBody } from "../../_libs/h3.mjs";
import { $ as $fetch } from "../../_libs/ofetch.mjs";
import "../../_libs/rou3.mjs";
import "../../_libs/srvx.mjs";
import "node:stream";
const chat = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const apiKey = process.env.OPENROUTER_API_KEY ?? process.env.VITE_OPENROUTER_API_KEY ?? "";
  if (!apiKey) {
    return { _error: true, status: 500, message: "API key not configured", data: "OPENROUTER_API_KEY missing" };
  }
  try {
    const response = await $fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://songo.com.vn",
        "X-Title": "AI Son - Lotus Paint"
      },
      body: {
        model: "openai/gpt-4o-mini",
        messages: body?.messages ?? []
      }
    });
    return response;
  } catch (err) {
    const error = err;
    return {
      _error: true,
      status: error?.status ?? 500,
      message: error?.message ?? "Unknown error",
      data: error?.data ?? null
    };
  }
});
export {
  chat as default
};
