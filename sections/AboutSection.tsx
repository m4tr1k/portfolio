import Skill from "../components/Skill";
import styles from "../styles/sections/AboutSection.module.css";
import Computer from "../components/Computer";
import Image from "next/image";
import Section from "../components/Section";

type Props = {
  imagePaths: string[];
};

const AboutSection = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Who Am I?</h1>
          <p className={styles.text}>
            My name is Francisco Fernandes and since I was 13 years old I
            discovered that I wanted to be able to combine programming and art
            by developing websites, mobile and desktop apps.
            <br></br>
            <br></br>
            Even though I don&#39;t have an academic art background
            <span style={{ fontStyle: "italic" }}> yet</span>, my goal is to
            always attempt to build the most aesthetically pleasing software
            without compromising performance, security and reliability.
            <br></br>
            <br></br>
            At the moment, I&#39;m pursuing a master&#39;s degree in Software
            Engineering at{" "}
            <a href="https://www.isep.ipp.pt/" target="_blank" rel="noreferrer">
              ISEP - Instituto Superior de Engenharia do Porto
            </a>{" "}
            with the goal of becoming a front-end developer.
          </p>
          <h2>My Skills</h2>
          <div>
            <Skill name="Experience" level={4} />
            <Skill name="Communication" level={8} />
            <Skill name="Criativity" level={7} />
            <Skill name="Motivation" level={9} />
          </div>
          <h2>Proficient With</h2>
          <div className={styles.stack}>
            {props.imagePaths.map((imagePath, i) => {
              return (
                <Image
                  key={i}
                  src={"/stack/" + imagePath}
                  width={30}
                  height={30}
                  layout="fixed"
                />
              );
            })}
          </div>
          <p style={{ fontStyle: "italic", margin: "1em 0", fontSize: "1em" }}>
            to be updated...
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Computer />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
