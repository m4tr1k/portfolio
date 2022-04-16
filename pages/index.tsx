import type { NextPage } from "next";
import Head from "next/head";
import path from "path";
import Navbar from "../components/Navbar";
import ScrollBullets from "../components/ScrollBullets";
import AboutSection from "../sections/AboutSection";
import HomeSection from "../sections/HomeSection";
import { promises as fs } from "fs";

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
      <ScrollBullets />
      <HomeSection />
      <AboutSection imagePaths={props.stackImagePaths} />
    </div>
  );
};

export default Home;
