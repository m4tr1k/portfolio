import type { NextPage } from "next";
import Head from "next/head";
import path from "path";
import Navbar from "../components/Navbar";
import ScrollBullets from "../components/ScrollBullets";
import AboutSection from "../sections/AboutSection";
import HomeSection from "../sections/HomeSection";
import { promises as fs } from "fs";
import ProjectsSection from "../sections/ProjectsSection";
import ScrollContext from "../context/ScrollContext";
import { useState } from "react";
import { readHighlightedProjects } from "../utils/highlighted-projects";

export async function getStaticProps() {
  //Stack Images
  const stackImageDirectory = path.join(process.cwd(), "public/stack");
  const stackImagePaths = await fs.readdir(stackImageDirectory);

  //Highlighted Projects
  const highlightedProjects = await readHighlightedProjects();

  return {
    props: {
      stackImagePaths,
      highlightedProjects,
    },
  };
}

type Props = {
  stackImagePaths: string[];
  highlightedProjects: string[];
};

const Home: NextPage<Props> = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Head>
        <title>Francisco Fernandes</title>
        <meta
          name="description"
          content="My name is Francisco Fernandes and this is my portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ScrollContext.Provider value={{ activeIndex, setActiveIndex }}>
        <ScrollBullets />
        <HomeSection />
        <AboutSection imagePaths={props.stackImagePaths} />
        <ProjectsSection projects={props.highlightedProjects} />
      </ScrollContext.Provider>
    </div>
  );
};

export default Home;
