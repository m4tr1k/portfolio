import styles from "../styles/sections/ProjectsSection.module.css";
import Section from "../components/Section";
import Project from "../components/Project";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <Section id="2" color="#3b6277">
      <h1 className={styles.title}>What I&#39;ve Built so Far</h1>
      <p className={styles.description}>
        My highlighted projects, from front-end to back-end
      </p>
    </Section>
  );
};

export default ProjectsSection;
