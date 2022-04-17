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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Marvel&family=Quicksand:wght@300&display=swap"
          rel="stylesheet"
        />
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
