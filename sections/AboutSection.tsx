import Skill from "../components/Skill";
import styles from "../styles/sections/AboutSection.module.css";

const data = [
  { name: "Experience", skill: 2 },
  { name: "Communication", skill: 4 },
  { name: "Criativity", skill: 4 },
  { name: "Criativity", skill: 5 },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Who Am I?</h1>
          <p className={styles.text}>
            My name is Francisco Fernandes and since I was 13 years old I
            discovered that I wanted to be able to combine programming and art
            by developing websites, mobile and desktop apps.
            <br></br>
            <br></br>
            Even though I don't have an academic art background
            <span style={{ fontStyle: "italic" }}> yet</span>, my goal is to
            attempt to build the most aesthetically pleasing software without
            compromising performance, security and reliability.
            <br></br>
            <br></br>
            At the moment, I'm pursuing a master's degree in Software
            Engineering at{" "}
            <a href="https://www.isep.ipp.pt/" target="_blank">
              ISEP - Instituto Superior de Engenharia do Porto
            </a>{" "}
            with the goal of becoming a front-end developer.
          </p>
          <h2>My Skills</h2>
          <div className={styles.skills}>
            <Skill name="Experience" level={4} />
            <Skill name="Communication" level={8} />
            <Skill name="Criativity" level={7} />
            <Skill name="Motivation" level={9} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
