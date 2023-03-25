import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Head from "next/head";
import ContactSection from "../../sections/common/ContactSession";
import AboutMeSection from "../../sections/about/AboutMeSection";
import ServicesSection from "../../sections/about/ServicesSection";
import CompaniesSection from "../../sections/about/CompaniesSection";
import path from "path";
import { promises as fs } from "fs";

type Props = {
  stack: string[];
};

const About: NextPage<Props> = ({ stack }) => {
  const { t } = useTranslation("about");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta name="description" content={t("description") as string} />
      </Head>
      <AboutMeSection />
      <ServicesSection stack={stack} />
      <CompaniesSection />
      <ContactSection />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const stack = await fs.readdir(path.join(process.cwd(), "public/stack"));

  const translations = await serverSideTranslations(locale, [
    "about",
    "menu",
    "contact",
  ]);

  return {
    props: {
      ...translations,
      stack,
    },
  };
}

export default About;
