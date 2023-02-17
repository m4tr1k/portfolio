import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} - ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `Message Sent!` });
}
