import { ReactNode, useState } from "react";
import { PageTransitionContext } from "../stores";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import FooterSection from "../sections/common/FooterSection";

type Props = {
  children: ReactNode;
  pathname: string;
};

export default function Layout(props: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const errorPage = props.pathname === "/404" || props.pathname === "/500";

  const toggleMenu = () => {
    let open = !openMenu;
    setOpenMenu(open);
  };

  return (
    <PageTransitionContext.Provider value={{ pageLoading, setPageLoading }}>
      <PageTransition />
      <main id="main">
        <Navbar
          errorPage={errorPage}
          openMenu={openMenu}
          toggleMenu={toggleMenu}
        />
        <Menu showMenu={openMenu} />
        {props.children}
      </main>
      <FooterSection />
    </PageTransitionContext.Provider>
  );
}
