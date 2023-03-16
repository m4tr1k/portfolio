import { useTranslation } from "next-i18next";
import Section from "../../components/Section";
import styles from "../../styles/sections/about/AboutMeSection.module.css";

const AboutMeSection = () => {
  const { t } = useTranslation("about");

  return (
    <div className={styles.aboutMe}>
      <Section
        id="about"
        navbarSpace
        titleProps={{
          position: "left",
          sectionTitle: "About",
          title: "Who Am I?",
          description:
            "I am Francisco Fernandes, a frontend software engineer who puts a lot of effort into creating beautiful and functional websites. I am also a passionate learner, and I am always looking for new ways to improve my skills. I work/worked as a freelancer for several companies, working on mobile and web applications.",
        }}
      >
        <div className={styles.status}>
          <p>Current Status</p>
          <p>Master's Student at ISEP and Freelancer</p>
          <p>Available for Work</p>
        </div>
      </Section>
    </div>
  );
};

export default AboutMeSection;
