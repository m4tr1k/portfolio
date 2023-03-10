import { NextPage } from "next";
import Head from "next/head";
import { getArticleById } from "../../utils/get-posts";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Article from "../../components/Article";

type Props = {
  article: Article;
};

const ArticleBlogPost: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{`${props.article.metadata.title} | Francisco Fernandes`}</title>
      </Head>
      <Article this={props.article} />
    </div>
  );
};

export async function getStaticProps(context: any) {
  const { params, locale } = context;

  const id = params.id;

  try {
    const [translations, article] = await Promise.all([
      serverSideTranslations(locale, ["menu"]),
      getArticleById(id, locale),
    ]);

    return {
      props: {
        article,
        ...translations,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default ArticleBlogPost;
