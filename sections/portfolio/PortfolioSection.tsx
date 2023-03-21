import PortfolioCard from "../../components/Card/PortfolioCard";
import Section from "../../components/Section";
import styles from "../../styles/sections/portfolio/PortfolioSection.module.css";

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
      }}
    >
      <div className={styles["portfolio-container"]}>
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </Section>
  );
};

export default PortfolioSection;
