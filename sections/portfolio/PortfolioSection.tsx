import PortfolioCard from "../../components/Card/PortfolioCard";
import Section from "../../components/Section";
import styles from "../../styles/sections/portfolio/PortfolioSection.module.css";
import { useTranslation } from "next-i18next";

const PortfolioSection = () => {
  const { t } = useTranslation("portfolio");

  const projects = t("portfolioSection.projects", {
    returnObjects: true,
  }) as [];

  return (
    <Section
      id="portfolio"
      navbarSpace
      titleProps={{
        position: "left",
        sectionTitle: t("portfolioSection.sectionTitle"),
        title: t("portfolioSection.title"),
        description: t("portfolioSection.description") as string,
        descriptionSpacing: true,
      }}
    >
      <div className={styles["portfolio-container"]}>
        {projects.map((project, index) => {
          return (
            <PortfolioCard key={"project-" + index} projectInfo={project} />
          );
        })}
      </div>
      <h3 className={styles.soon}>{t("portfolioSection.soon")}</h3>
    </Section>
  );
};

export default PortfolioSection;
