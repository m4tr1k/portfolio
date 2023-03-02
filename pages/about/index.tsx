import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Section from "../../components/Section";

const About: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta
          name="description"
          content="Know more about me in this page. I am a frontend software engineer, and this is my web workspace. Explore my projects, read my blog, and get in touch with me."
        />
      </Head>
      <Section id="about">
        <h1 style={{ textAlign: "center" }}>Page In Development</h1>
      </Section>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["menu", "about"])),
    },
  };
}

export default About;
