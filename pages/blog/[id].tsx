import { NextPage } from "next";
import Head from "next/head";
import serverSideTranslations from "../../utils/serverSideTranslations";

const ArticleBlogPost: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Francisco Fernandes`}</title>
      </Head>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const translations = await serverSideTranslations(locale, ["menu"]);

  return {
    props: {
      ...translations,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default ArticleBlogPost;
