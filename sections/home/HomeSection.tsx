import Image from "next/image";
import styles from "../../styles/sections/home/HomeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";

const HomeSection = () => {
  const { t } = useTranslation("home");

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
          <p>{t("homepage.description")}</p>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.scrollDown}>
            <div></div>
            <p>{t("homepage.scrollDown")}</p>
          </div>
          <a
            className={styles.photoCredits}
            href="https://www.instagram.com/inesandhercamera/"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <span>{t("homepage.photo")} </span>Inês Basto
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
