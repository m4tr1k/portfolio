import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Cabin, Titillium_Web, Courgette } from "@next/font/google";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { PageTransitionContext } from "../stores";
import { useRouter } from "next/router";
import colors from "../constants/page-colors.json";

//FontAwesome config
config.autoAddCss = false;
library.add(faLinkedin, faGithub, faTwitter, faCheck, faXmark);

//Google Fonts config
const titillium_web = Titillium_Web({
  weight: ["200", "600"],
  display: "swap",
});
const cabin = Cabin({ display: "swap" });
const courgette = Courgette({ weight: "400", display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const color = (colors as any)[pathname]
    ? (colors as any)[pathname].color
    : "main-color";
  const fontColor = (colors as any)[pathname]
    ? (colors as any)[pathname].fontColor
    : "secondary-color";

  console.log(pathname);

  const toggleMenu = () => {
    let open = !openMenu;
    setOpenMenu(open);
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --titillium_web-font: ${titillium_web.style.fontFamily};
          --cabin-font: ${cabin.style.fontFamily};
          --courgette-font: ${courgette.style.fontFamily};
        }

        html,
        body {
          background-color: var(--${color});
          color: var(--${fontColor});
        }
      `}</style>
      <ReCaptchaProvider>
        <PageTransitionContext.Provider value={{ pageLoading, setPageLoading }}>
          <PageTransition />
          <main id="main">
            <Navbar openMenu={openMenu} toggleMenu={toggleMenu} />
            <Menu showMenu={openMenu} />
            <Component {...pageProps} />
          </main>
        </PageTransitionContext.Provider>
      </ReCaptchaProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
