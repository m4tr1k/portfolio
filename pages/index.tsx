import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ScrollBullets from "../components/ScrollBullets";
import ContactsSection from "../sections/AboutSection";
import HomeSection from "../sections/HomeSection";

const Home: NextPage = () => {
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
      <ContactsSection />
    </div>
  );
};

export default Home;
