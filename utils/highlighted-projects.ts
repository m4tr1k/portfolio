import { promises as fs } from "fs";
import path from "path";

/**
 * Function that reads the content of the markdown files inside the highlighted projects folder
 * Returns a list of strings with the content of each file.
 */

const readHighlightedProjects = async () => {
  const dir = path.join(process.cwd(), "public/projects/highlighted");
  const paths = await fs.readdir(dir);
  const files = paths.map((file) => path.resolve(dir, file));

  let highlightedProjects: string[] = [];

  for (const file of files) {
    highlightedProjects = [
      ...highlightedProjects,
      await fs.readFile(file, { encoding: "utf-8" }),
    ];
  }

  return highlightedProjects;
};

export { readHighlightedProjects };
