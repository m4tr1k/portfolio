import fs from "fs";
import path from "path";
import type { NextPage } from "next";
import Head from "next/head";
import HomeSection from "../sections/home/HomeSection";
import HighlightedProjectSection from "../sections/home/HighlightedProjectSection";
import ContactSection from "../sections/common/ContactSession";
import serverSideTranslations from "../utils/serverSideTranslations";
import matter from "gray-matter";
import { readMDXFile } from "../utils/readMDXFile";

type Props = {
  highlightedProjects: string;
};

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Workspace | Francisco Fernandes</title>
        <meta
          name="description"
          content="My name is Francisco Fernandes, a frontend software engineer, and this is my web workspace. Explore my projects, read my blog, and get in touch with me."
        />
      </Head>
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

  const [highlightedProjects, translations] = await Promise.all([
    readMDXFile(content),
    serverSideTranslations(locale, ["common", "menu", "contact"]),
  ]);

  return {
    props: {
      highlightedProjects,
      ...translations,
    },
  };
}

export default Home;
