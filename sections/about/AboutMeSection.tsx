import { useTranslation } from "next-i18next";
import Image from "next/image";
import Section from "../../components/Section";
import styles from "../../styles/sections/about/AboutMeSection.module.css";

const AboutMeSection = () => {
  const { t } = useTranslation("about");

  return (
    <div className={styles.aboutMe}>
      <Section
        id="about"
        titleProps={{
          position: "left",
          sectionTitle: t("aboutMe.sectionTitle"),
          title: t("aboutMe.title"),
          description: `${t("aboutMe.description")}`,
        }}
      >
        <div className={styles.status}>
          <p>{t("aboutMe.currentStatus.title")}</p>
          <p>{t("aboutMe.currentStatus.position")}</p>
          <p>{t("aboutMe.currentStatus.availability")}</p>
        </div>
      </Section>
      <div className={styles.pfp}>
        <div></div>
        <Image
          src={"/about-image.png"}
          alt="About Francisco Fernandes"
          width={841}
          height={750}
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
