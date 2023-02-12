import Image from "next/image";
import React from "react";
import styles from "../styles/sections/HomeSection.module.css";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HomeSection = () => {
  return (
    <React.Fragment>
      <Section id="0" className={styles.homeSection}>
        <div className={styles.homeContent}>
          <h1>
            Francisco
            <br />
            Fernandes
          </h1>
          <div className={styles.separator} />
          <p>Explore my path as a software engineer and my newest adventures</p>
        </div>
        <div className={styles.scrollDown}>
          <div></div>
          <p>Take a Look</p>
        </div>
        <a
          className={styles.photoCredits}
          href="https://www.instagram.com/inesandhercamera/"
          target="_blank"
        >
          <p>Photo by Inês Basto</p>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </Section>
      <Image
        alt="Background Image"
        src="/background.jpg"
        fill
        className={styles.backgroundImage}
      />
    </React.Fragment>
  );
};

export default HomeSection;
