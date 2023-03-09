import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    const { data } = matter(fileContent);

    return { ...data, id: article } as Article;
  });

  return articles;
};
