import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ArticleSection from "../../sections/blog/ArticleSection";

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
      <ArticleSection />
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
