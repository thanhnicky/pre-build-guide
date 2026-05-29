import { d as defineEventHandler, r as readBody } from "../../_libs/h3.mjs";
import { $ as $fetch } from "../../_libs/ofetch.mjs";
import "../../_libs/rou3.mjs";
import "../../_libs/srvx.mjs";
import "node:stream";
const chat = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const response = await $fetch("https://9router.vuhai.io.vn/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
        "Content-Type": "application/json"
      },
      body: {
        model: "ces-chatbot-gpt-5.4",
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
