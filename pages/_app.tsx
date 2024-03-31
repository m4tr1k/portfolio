import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Cabin, Titillium_Web, Courgette } from "next/font/google";
import {
  faCheck,
  faClock,
  faFilter,
  faMagnifyingGlass,
  faXmark,
  faLaptopCode,
  faDesktop,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import colors from "../constants/page-colors.json";
import Layout from "../layouts/Layout";
import nextI18nextConfig from "../next-i18next.config";

//FontAwesome config
config.autoAddCss = false;
library.add(
  faLinkedin,
  faGithub,
  faTwitter,
  faCheck,
  faXmark,
  faMagnifyingGlass,
  faFilter,
  faClock,
  faLaptopCode,
  faDesktop,
  faMobileScreen
);

//Google Fonts config
const titillium_web = Titillium_Web({
  weight: ["200", "600"],
  display: "swap",
});
const cabin = Cabin({ display: "swap" });
const courgette = Courgette({ weight: "400", display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const pageName = pathname.split("/")[1] !== "" ? pathname.split("/")[1] : "/";

  const color = (colors as any)[pageName]
    ? (colors as any)[pageName].color
    : "main-color";
  const fontColor = (colors as any)[pageName]
    ? (colors as any)[pageName].fontColor
    : "secondary-color";

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
      <Layout pathname={pathname}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig as any);
