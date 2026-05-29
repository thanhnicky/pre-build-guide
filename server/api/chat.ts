import { defineEventHandler, readBody } from "h3";
import { $fetch } from "ofetch";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ messages: unknown[] }>(event);
  const apiKey = process.env.OPENROUTER_API_KEY ?? process.env.VITE_OPENROUTER_API_KEY ?? "";
  if (!apiKey) {
    return { _error: true, status: 500, message: "API key not configured", data: "OPENROUTER_API_KEY missing" };
  }

  try {
    const response = await $fetch<unknown>("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://songo.com.vn",
        "X-Title": "AI Son - Lotus Paint",
      },
      body: {
        model: "openai/gpt-4o-mini",
        messages: body?.messages ?? [],
      },
    });
    return response;
  } catch (err: unknown) {
    const error = err as { data?: unknown; status?: number; message?: string };
    return {
      _error: true,
      status: error?.status ?? 500,
      message: error?.message ?? "Unknown error",
      data: error?.data ?? null,
    };
  }
});
