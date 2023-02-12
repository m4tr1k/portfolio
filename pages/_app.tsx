import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Cabin, Titillium_Web, Courgette } from "@next/font/google";
import { useEffect } from "react";
config.autoAddCss = false;

const titillium_web = Titillium_Web({
  weight: "200",
});
const cabin = Cabin();
const courgette = Courgette({ weight: "400" });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      const main = document.getElementById("main");
      if (loader && main) {
        loader.style.display = "none";
        main.style.animation = "appear 0.4s ease-in-out";
        main.style.opacity = "1";
      }
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --titillium_web-font: ${titillium_web.style.fontFamily};
          --cabin-font: ${cabin.style.fontFamily};
          --courgette-font: ${courgette.style.fontFamily};
        }
      `}</style>
      <main id="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
