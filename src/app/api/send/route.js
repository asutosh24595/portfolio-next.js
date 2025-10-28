import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: `Message from ${name}`,
      reply_to: email,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ success: false, error: error.message });
  }
}
