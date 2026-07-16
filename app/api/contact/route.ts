import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "apexpetclinic74@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Apex Pet Clinic Website" <${process.env.EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email || process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2 style="color:#1E5F8C;">New contact message — Apex Pet Clinic</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Could not send message." },
      { status: 500 }
    );
  }
}
