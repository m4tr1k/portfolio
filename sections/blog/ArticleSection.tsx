import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Separator from "../../components/Separator";
import styles from "../../styles/sections/blog/ArticleSection.module.css";

const ArticleSection = () => {
  return (
    <Section
      titleProps={{
        position: "left",
        sectionTitle: "Blog",
        title: "Written Articles",
        description:
          "Check out and read my articles that talk about various different topics",
      }}
      id="blog"
    >
      <div className={styles["article-session"]}>
        <div className={styles.filterMenu}>
          <Input
            info={{
              name: "Search",
              placeholder: "Search",
              required: false,
              type: "input",
              icon: "magnifying-glass",
            }}
          />
          <div className={styles.filterButton}>
            <FontAwesomeIcon icon={["fas", "filter"]} size="lg" />
            <button>Filter</button>
          </div>
        </div>
        <Separator color="#B9B0A7" />
      </div>
    </Section>
  );
};

export default ArticleSection;
