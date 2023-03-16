import { NextPage } from "next";
import Head from "next/head";
import { getArticleById } from "../../utils/get-posts";
import serverSideTranslations from "../../utils/serverSideTranslations";
import Article from "../../components/Article";

type Props = {
  article: Article;
  locale: string;
};

const ArticleBlogPost: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{`${props.article.metadata.title} | Francisco Fernandes`}</title>
        <meta
          name="description"
          content={props.article.metadata.description}
          key="desc"
        />
        <meta property="og:title" content={props.article.metadata.title} />
        <meta
          property="og:description"
          content={props.article.metadata.description}
        />
        <meta
          property="og:url"
          content={"https://www.ffwork.space/blog/" + props.article.metadata.id}
        />
        <meta property="og:type" content="article" />
        <meta name="author" content="Francisco Fernandes" />
        <meta property="og:locale" content={props.locale} />
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
        article: { ...article, metadata: { ...article.metadata, id } },
        locale,
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
