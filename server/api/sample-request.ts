import { defineEventHandler, readBody } from "h3";
import { $fetch } from "ofetch";

interface SampleRequestData {
  name: string;
  phone: string;
  location: string;
  projectType: string;
  notes: string;
  coatingSystem: string;
  selectedMethod: string;
  samplePrice: number;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SampleRequestData>(event);
  
  // Log dữ liệu để debug
  console.log("Sample request received:", JSON.stringify(body, null, 2));

  // Gửi email thông báo
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = "nguyenxuanthanh2009@gmail.com";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Email notification skipped.");
    // Vẫn trả về success để không block flow
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
      <p><small>Thời gian: ${new Date().toLocaleString("vi-VN")}</small></p>
    `;

    await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: {
        from: "Sơn Lotus <noreply@songo.com.vn>",
        to: recipientEmail,
        subject: `Đặt mẫu thử mới - ${body.name} - ${body.coatingSystem}`,
        html: emailContent,
      },
    });

    console.log("Email sent successfully to", recipientEmail);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Failed to send email:", error);
    // Vẫn trả về success để không block flow khách hàng
    return { success: true, message: "Request received (email failed)" };
  }
});
