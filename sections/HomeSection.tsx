import Image from "next/image";
import React from "react";
import styles from "../styles/HomeSection/HomeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const HomeSection = () => {
  return (
    <section id="#home">
      <div>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <h1>Francisco Fernandes</h1>
          </div>
          <div className={styles.scrollDown}>
            <div></div>
            <p>Scroll Down</p>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            <FontAwesomeIcon icon={faAt} size="lg" />
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
