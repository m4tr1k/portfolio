import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Head from "next/head";
import PortfolioSection from "../../sections/portfolio/PortfolioSection";
import ContactSection from "../../sections/home/ContactSession";

const Portfolio: NextPage = () => {
  const { t } = useTranslation("portfolio");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta name="description" content={t("description") as string} />
      </Head>
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const translations = await serverSideTranslations(locale, [
    "portfolio",
    "menu",
    "contact",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}

export default Portfolio;
