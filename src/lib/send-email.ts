"use server";
import { contactEmailTemplate } from "@/components/emailTemplate/contact";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  sendTo,
  subject,
  html,
}: {
  sendTo: string;
  subject: string;
  html: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: process.env.SMTP_SERVER_USERNAME,
    to: sendTo,
    subject: subject,
    html: html,
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", sendTo);
  return info;
}


export async function contact({
  email,
  phone,
  location,
  message,
  name
}:{
  email:string;
  phone:string;
  location:string;
  message:string;
  name:string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const html = contactEmailTemplate({
    name,
    email,
    phone,
    location,
    message,
  });

  const result = await sendMail({
    sendTo: SMTP_SERVER_USERNAME || "",
    subject: "New Contact Form Submission",
    html,
  });

  if (result) {
    return { success: true };
  }

  return { success: false, error: "Failed to send email." };
}
``