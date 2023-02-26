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

if (typeof window !== "undefined") {
  window.addEventListener("load", () =>
    setTimeout(() => {
      const loader = document.querySelector(".globalLoader") as HTMLElement;
      const root = document.querySelector(":root") as HTMLElement;
      const main = document.getElementById("main");
      if (loader && main) {
        loader.style.display = "none";
        main.style.animation = "appear 0.4s ease-in-out";
        main.style.opacity = "1";
        root.style.overflow = "scroll";
      }
    }, 1000)
  );
}

function MyApp({ Component, pageProps }: AppProps) {
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
        <div className="globalLoader">
          <Spinner />
          <p>Loading...</p>
        </div>
        <main id="main">
          <Component {...pageProps} />
        </main>
      </ReCaptchaProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
