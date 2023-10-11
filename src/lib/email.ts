"use server";

import nodemailer from "nodemailer";

interface SendEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: "huynguyen@likelion.net",
    pass: "ertevinbxjsthvhu",
  },
});

export async function sendEmail({ from, to, subject, html }: SendEmail) {
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not send email");
  }
}
