import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(process.cwd(), "public/Francisco_FernandesCV.pdf");
  const imageBuffer = readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "content-disposition",
    "attachment; filename=Francisco_FernandesCV.pdf"
  );

  res.send(imageBuffer);
}
