import { d as defineEventHandler, r as readBody } from "../../_libs/h3.mjs";
import { $ as $fetch } from "../../_libs/ofetch.mjs";
import "../../_libs/rou3.mjs";
import "../../_libs/srvx.mjs";
import "node:stream";
const sampleRequest = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body) {
    console.error("No body received in request");
    return { success: false, message: "Invalid request" };
  }
  console.log("Sample request received:", JSON.stringify(body, null, 2));
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = "nguyenxuanthanh2009@gmail.com";
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Email notification skipped.");
    return { success: true, message: "Request received (email not sent - API key missing)" };
  }
  try {
    const emailContent = `
      <h2>Yêu cầu đặt mẫu thử mới</h2>
      <p><strong>Khách hàng:</strong> ${body.name}</p>
      <p><strong>Số điện thoại:</strong> ${body.phone}</p>
      <p><strong>Địa chỉ nhận hàng:</strong> ${body.location}</p>
      <p><strong>Loại hạng mục:</strong> ${body.projectType}</p>
      <p><strong>Hệ sơn:</strong> ${body.coatingSystem}</p>
      <p><strong>Phương pháp:</strong> ${body.selectedMethod === "lau" ? "Lau" : "Phun"}</p>
      <p><strong>Giá bộ mẫu:</strong> ${body.samplePrice.toLocaleString("vi-VN")} đ</p>
      <p><strong>Ghi chú:</strong> ${body.notes || "Không có"}</p>
      <hr>
      <p><small>Thời gian: ${(/* @__PURE__ */ new Date()).toLocaleString("vi-VN")}</small></p>
    `;
    await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: {
        from: "Sơn Lotus <onboarding@resend.dev>",
        to: recipientEmail,
        subject: `Đặt mẫu thử mới - ${body.name} - ${body.coatingSystem}`,
        html: emailContent
      }
    });
    console.log("Email sent successfully to", recipientEmail);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: true, message: "Request received (email failed)" };
  }
});
export {
  sampleRequest as default
};
