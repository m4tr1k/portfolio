import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Section from "../../components/Section";

const Blog: NextPage = () => {
  const { t } = useTranslation("blog");

  return (
    <div>
      <Head>
        <title>{`${t("title")} | Francisco Fernandes`}</title>
        <meta
          name="description"
          content="Explore my blog and articles. I write about software engineering, web development, and other topics."
        />
      </Head>
      <Section id="blog">
        <h1 style={{ textAlign: "center" }}>Page In Development</h1>
      </Section>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["menu", "blog"])),
    },
  };
}

export default Blog;
