import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readMDXFile } from "./readMDXFile";
import getReadingTime from "reading-time";

export const getArticles = (locale: string) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "public/blog"));

  const articles = dirFiles.map((article) => {
    const fileContent = fs.readFileSync(
      path.join(
        process.cwd(),
        `public/blog/${article}/${locale}/${article}.mdx`
      ),
      "utf-8"
    );
    const { data, content } = matter(fileContent);
    const minutes = Math.floor(getReadingTime(content).minutes);

    return { ...data, id: article, minutes } as ArticleMetadata;
  });

  return articles;
};

export const getArticleById = async (id: string, locale: string) => {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), `public/blog/${id}/${locale}/${id}.mdx`),
    "utf-8"
  );

  const { content, data } = matter(fileContent);

  const mdx = await readMDXFile(content);

  return {
    metadata: { ...data } as ArticleMetadata,
    content: mdx,
  } as Article;
};
