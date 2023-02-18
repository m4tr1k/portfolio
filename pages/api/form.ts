import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SentMessageInfo } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (success) {
        resolve(success);
      }
      reject(error);
    });
  });
  if (!server) {
    res.status(500).json({ error: "Error failed" });
  }

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} - ${email}`,
    text: message,
  };

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData).then(
      (value: SentMessageInfo) => {
        if (value.response.includes("250")) {
          resolve(true);
        }
      },
      (reason: any) => {
        reject();
      }
    );
  });

  if (!success) {
    res.status(500).json({ error: "Error sending email" });
  }
  res.status(200).json({ success: success });
}
