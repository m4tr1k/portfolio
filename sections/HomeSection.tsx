import Image from "next/image";
import React from "react";
import styles from "../styles/sections/HomeSection.module.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "../components/SocialLink";

const HomeSection = () => {
  return (
    <React.Fragment>
      <section id="home" className={styles.overlay}>
        <div style={{ height: "100%", position: "relative" }}>
          <div className={styles.title}>
            <h1>Francisco Fernandes</h1>
            <h2>My Path as a Software Engineer</h2>
          </div>
          <div className={styles.scrollDown}>
            <div></div>
            <p>Explore It</p>
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
      </section>
      <Image
        src="/background.jpg"
        layout="fill"
        className={styles.background}
      />
    </React.Fragment>
  );
};

export default HomeSection;
