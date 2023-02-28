import fs from "fs";
import path from "path";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import { useState } from "react";
import HighlightedProjectSection from "../sections/HighlightedProjectSection";
import ContactSection from "../sections/ContactSection";
import Menu from "../components/Menu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import remarkMdxImages from "remark-mdx-images";
import imageMetadata from "../utils/image-metadata";

type Props = {
  highlightedProjects: string;
};

const Home: NextPage<Props> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    let open = !openMenu;
    setOpenMenu(open);
  };

  return (
    <div>
      <Head>
        <title>Francisco Fernandes' Workspace</title>
        <meta
          name="description"
          content="My name is Francisco Fernandes, a frontend software engineer, and this is my web workspace. Explore my projects, read my blog, and get in touch with me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} />
      <Menu showMenu={openMenu} />
      <HomeSection />
      <HighlightedProjectSection projects={props.highlightedProjects} />
      <ContactSection />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const pathFile = path.join(
    process.cwd(),
    `public/projects/${locale}/highlighted-projects.mdx`
  );
  const source = fs.readFileSync(pathFile, "utf8");
  const { content } = matter(source);

  const { code: highlightedProjects } = await bundleMDX({
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

  return {
    props: {
      highlightedProjects,
      ...(await serverSideTranslations(locale, ["home", "menu"])),
    },
  };
}

export default Home;
