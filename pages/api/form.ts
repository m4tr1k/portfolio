import { NextApiRequest, NextApiResponse } from "next";
import { SentMessageInfo, createTransport } from "nodemailer";

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.SECRET_RECAPTCHA_SITE_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    method: "POST",
  });

  const data = await response.json();
  return data.success && data.score >= 0.5;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { name, email, message, token } = body;
  let success;

  if (await verifyRecaptcha(token)) {
    const transporter = createTransport({
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

    success = await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData).then(
        (value: SentMessageInfo) => {
          if (value.response.includes("250")) {
            resolve(true);
          }
        },
        (_reason: any) => {
          reject();
        }
      );
    });
  }

  if (success) {
    res.status(200).json({ success: success });
  } else {
    res.status(500).json({ error: "Error sending email" });
  }
}
