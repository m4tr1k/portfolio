import serverSideTranslations from "../utils/serverSideTranslations";
import Section from "../components/Section";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { Fragment } from "react";

export default function Custom404() {
  const { t } = useTranslation("errors");

  return (
    <Fragment>
      <Head>
        <title>{t("404.sectionTitle")} | Francisco Fernandes</title>
      </Head>
      <Section
        id="404-error"
        titleProps={{
          position: "center",
          sectionTitle: t("404.sectionTitle"),
          title: t("404.title"),
          description: t("404.description"),
        }}
        navbarSpace
      >
        <div></div>
      </Section>
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const translations = await serverSideTranslations(locale, ["menu", "errors"]);
  return {
    props: {
      ...translations,
    },
  };
}
