import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "apexpetclinic74@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, name, petName, phone, date, slot, notes } = body;

    if (!service || !name || !phone || !date || !slot) {
      return NextResponse.json(
        { error: "Missing required booking fields." },
        { status: 400 }
      );
    }

    // Requires EMAIL_USER and EMAIL_PASS (a Gmail App Password, not your normal
    // password) to be set in .env.local. See README.md for setup steps.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const subject = `New Slot Booking: ${service} — ${name} on ${date} at ${slot}`;

    const html = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2 style="color:#1E5F8C;">New booking request — Apex Pet Clinic</h2>
        <table cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 480px;">
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Service</td><td style="border-bottom:1px solid #eee;">${service}</td></tr>
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Customer Name</td><td style="border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Pet Name</td><td style="border-bottom:1px solid #eee;">${petName || "Not provided"}</td></tr>
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Phone</td><td style="border-bottom:1px solid #eee;">${phone}</td></tr>
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Date</td><td style="border-bottom:1px solid #eee;">${date}</td></tr>
          <tr><td style="font-weight:bold; border-bottom:1px solid #eee;">Time Slot</td><td style="border-bottom:1px solid #eee;">${slot}</td></tr>
          <tr><td style="font-weight:bold;">Notes</td><td>${notes || "—"}</td></tr>
        </table>
        <p style="color:#8B5E3C; font-weight:bold; margin-top:16px;">Please confirm this slot with the customer by phone.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Apex Pet Clinic Website" <${process.env.EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: process.env.EMAIL_USER,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Could not send booking email." },
      { status: 500 }
    );
  }
}
