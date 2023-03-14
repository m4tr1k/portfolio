import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Head from "next/head";
import ArticleSection from "../../sections/blog/ArticleSection";
import { getArticles } from "../../utils/get-posts";

type Props = {
  articles: ArticleMetadata[];
};

const Blog: NextPage = (props) => {
  const { articles } = props as Props;
  const { t } = useTranslation("blog");

  return (
    <div>
      <Head>
        <title>{`${t("pageHeaderTitle")} | Francisco Fernandes`}</title>
        <meta
          name="description"
          content="Explore my blog and articles. I write about software engineering, web development, and other topics."
        />
      </Head>
      <ArticleSection articles={articles} />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const articles = getArticles(locale);
  const translations = await serverSideTranslations(locale, ["blog", "menu"]);

  return {
    props: {
      articles,
      ...translations,
    },
  };
}

export default Blog;
