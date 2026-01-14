import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// ✅ Ensure Node.js runtime (required for nodemailer)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Your App Password
      },
    });

    await transporter.sendMail({
      // We keep 'from' as your email to ensure delivery
      from: `"${name} via Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email, // <--- Clicking 'Reply' in Gmail will go to the user
      subject: `New Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #15803d;">New Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.8rem; color: #666;">
            Note: You can reply directly to this email to reach the customer.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}