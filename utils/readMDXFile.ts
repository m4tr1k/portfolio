import { bundleMDX } from "mdx-bundler";
import remarkMdxImages from "remark-mdx-images";
import imageMetadata from "../utils/image-metadata";

export const readMDXFile = async (content: string) => {
  const { code } = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), imageMetadata];
      return options;
    },
  });
  return code;
};
