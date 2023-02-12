import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import ScrollContext from "../context/ScrollContext";
import { useState } from "react";

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
          content="My name is Francisco Fernandes and this is my web portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ScrollContext.Provider value={{ activeIndex, setActiveIndex }}>
        <HomeSection />
      </ScrollContext.Provider>
    </div>
  );
};

export default Home;
