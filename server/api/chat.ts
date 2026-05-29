import { defineEventHandler, readBody } from "h3";
import { $fetch } from "ofetch";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ messages: unknown[] }>(event);

  try {
    const response = await $fetch<unknown>("https://9router.vuhai.io.vn/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
        "Content-Type": "application/json",
      },
      body: {
        model: "ces-chatbot-gpt-5.4",
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
