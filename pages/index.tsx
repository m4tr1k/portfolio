import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import { useState } from "react";
import HighlightedProjectSection from "../sections/HighlightedProjectSection";
import ContactSection from "../sections/ContactSection";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    let open = !openMenu;
    setOpenMenu(open);
    (document.querySelector(":root") as HTMLElement).style.overflow = open
      ? "hidden"
      : "auto";
  };

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
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} />
      <Menu showMenu={openMenu} />
      <HomeSection />
      <HighlightedProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
