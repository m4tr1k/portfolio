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

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "public/stack");
  const stackImagePaths = await fs.readdir(postsDirectory);

  return {
    props: {
      stackImagePaths,
    },
  };
}

type Props = {
  stackImagePaths: string[];
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
        <ProjectsSection />
      </ScrollContext.Provider>
    </div>
  );
};

export default Home;
