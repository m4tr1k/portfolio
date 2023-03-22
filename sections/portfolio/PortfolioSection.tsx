import PortfolioCard from "../../components/Card/PortfolioCard";
import Section from "../../components/Section";
import styles from "../../styles/sections/portfolio/PortfolioSection.module.css";
import projects from "../../constants/projects.json";

const PortfolioSection = () => {
  return (
    <Section
      id="portfolio"
      navbarSpace
      titleProps={{
        position: "left",
        sectionTitle: "Portfolio",
        title: "All My Work",
        description: "Check all the projects I did as a freelancer",
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
      <h3 className={styles.soon}>And Soon Your Project...</h3>
    </Section>
  );
};

export default PortfolioSection;
