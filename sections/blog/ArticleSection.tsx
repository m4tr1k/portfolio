import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import BriefArticle from "../../components/BriefArticle";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Separator from "../../components/Separator";
import styles from "../../styles/sections/blog/ArticleSection.module.css";

type Props = {
  articles: ArticleMetadata[];
};

const ArticleSection = (props: Props) => {
  const { t } = useTranslation("blog");

  return (
    <Section
      titleProps={{
        position: "left",
        sectionTitle: t("sectionTitle"),
        title: t("title"),
        description: t("description") as string,
      }}
      id="blog"
      className={styles["article-section"]}
      navbarSpace
    >
      <div className={styles.filterMenu}>
        <Input
          info={{
            name: t("filterMenu.search"),
            placeholder: t("filterMenu.search"),
            required: false,
            type: "input",
            icon: "magnifying-glass",
          }}
        />
        <div className={styles.filterButton}>
          <FontAwesomeIcon icon={["fas", "filter"]} size="lg" />
          <button>{t("filterMenu.filter")}</button>
        </div>
      </div>
      <Separator color="#B9B0A7" />
      <div className={styles.articles}>
        {props.articles.map((article, index) => {
          return (
            <>
              <BriefArticle info={article} />
              <Separator color="#B9B0A7" />
            </>
          );
        })}
      </div>
    </Section>
  );
};

export default ArticleSection;
