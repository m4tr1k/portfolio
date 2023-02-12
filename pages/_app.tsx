import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Cabin, Titillium_Web, Courgette } from "@next/font/google";
config.autoAddCss = false;

const titillium_web = Titillium_Web({
  weight: "200",
});
const cabin = Cabin();
const courgette = Courgette({ weight: "400" });

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
