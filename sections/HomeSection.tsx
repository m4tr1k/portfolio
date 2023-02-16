import Image from "next/image";
import styles from "../styles/sections/HomeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HomeSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <section className={styles.homeSection}>
        <div className={styles.homeContent}>
          <h1>
            Francisco
            <br />
            Fernandes
          </h1>
          <div className={styles.separator} />
          <p>Explore my path as a software engineer and my newest adventures</p>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.scrollDown}>
            <div></div>
            <p>Take a Look</p>
          </div>
          <a
            className={styles.photoCredits}
            href="https://www.instagram.com/inesandhercamera/"
            target="_blank"
          >
            <p>
              <span>Photo by </span>Inês Basto
            </p>
            <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
          </a>
        </div>
      </section>
      <Image
        alt="Background Image"
        src="/background.jpg"
        fill
        priority
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default HomeSection;
