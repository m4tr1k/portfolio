import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Head from "next/head";
import ContactSection from "../../sections/common/ContactSession";
import AboutMeSection from "../../sections/about/AboutMeSection";
import ServicesSection from "../../sections/about/ServicesSection";
import CompaniesSection from "../../sections/about/CompaniesSection";

const About: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta name="description" content={t("description") as string} />
      </Head>
      <AboutMeSection />
      <ServicesSection />
      <CompaniesSection />
      <ContactSection />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const translations = await serverSideTranslations(locale, [
    "about",
    "menu",
    "contact",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}

export default About;
