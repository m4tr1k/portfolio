import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Section from "../../components/Section";

const Portfolio: NextPage = () => {
  const { t } = useTranslation("portfolio");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta
          name="description"
          content="In this page you will find all my projects as a frontend software engineer. You can explore every case study, and see the thought process behind each project."
        />
      </Head>
      <Section id="portfolio">
        <h1 style={{ textAlign: "center" }}>Page In Development</h1>
      </Section>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["menu", "portfolio"])),
    },
  };
}

export default Portfolio;
