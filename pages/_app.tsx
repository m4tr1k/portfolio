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
import Spinner from "../components/Spinner";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Animations from "../utils/animations";

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

let animations: Animations;

if (typeof window !== "undefined") {
  animations = new Animations();
  window.addEventListener("load", () => animations.initialAnimation());
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    let open = !openMenu;
    setOpenMenu(open);
  };

  useEffect(() => {
    router.events.on(
      "routeChangeStart",
      animations.pageTransitionAnimationStart
    );

    router.events.on("routeChangeComplete", () =>
      animations.pageTransitionAnimationEnd(setOpenMenu)
    );
    return () => {
      router.events.off(
        "routeChangeStart",
        animations.pageTransitionAnimationStart
      );
      router.events.on("routeChangeComplete", () =>
        animations.pageTransitionAnimationEnd(setOpenMenu)
      );
    };
  }, [router.events]);

  return (
    <>
      <style jsx global>{`
        :root {
          --titillium_web-font: ${titillium_web.style.fontFamily};
          --cabin-font: ${cabin.style.fontFamily};
          --courgette-font: ${courgette.style.fontFamily};
        }
      `}</style>
      <ReCaptchaProvider>
        <div className="loading-screen" />
        <div className="globalLoader">
          <Spinner />
          <p>Loading...</p>
        </div>
        <main id="main">
          <Navbar openMenu={openMenu} toggleMenu={toggleMenu} />
          <Menu showMenu={openMenu} />
          <Component {...pageProps} />
        </main>
      </ReCaptchaProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
