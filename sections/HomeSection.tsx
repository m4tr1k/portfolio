import Image from "next/image";
import React from "react";
import styles from "../styles/HomeSection/HomeSection.module.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "../components/SocialLink";

const HomeSection = () => {
  return (
    <section id="#home">
      <div>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <h1>Francisco Fernandes</h1>
            <h2>The Path of a Software Engineer</h2>
          </div>
          <div className={styles.scrollDown}>
            <div></div>
            <p>Scroll Down</p>
          </div>
          <div className={styles.icons}>
            <SocialLink url="https://github.com/m4tr1k" icon={faGithub} />
            <SocialLink
              url="https://www.linkedin.com/in/franciscofernandes88/"
              icon={faLinkedinIn}
            />
            <SocialLink
              name="Email"
              url="mailto:francisco.joao2000@gmail.com"
              icon={faAt}
            />
          </div>
        </div>
        <Image
          src="/background.jpg"
          layout="fill"
          className={styles.background}
        />
      </div>
    </section>
  );
};

export default HomeSection;
