import { useTranslation } from "next-i18next";
import Card from "../../components/Card";
import Section from "../../components/Section";
import styles from "../../styles/sections/about/ServicesSection.module.css";

const ServicesSection = () => {
  const { t } = useTranslation("about");
  return (
    <Section
      id="services"
      titleProps={{
        position: "center",
        sectionTitle: t("services.sectionTitle"),
        title: t("services.title"),
        description: t("services.description") as string,
        size: "small",
      }}
      className={styles["services-section"]}
    >
      <div className={styles.services}>
        <Card
          icon="mobile-screen"
          description={`${t("services.list.mobile")}`}
        />
        <Card icon="desktop" description={`${t("services.list.frontend")}`} />
        <Card
          icon="laptop-code"
          description={`${t("services.list.fullStack")}`}
        />
      </div>
    </Section>
  );
};

export default ServicesSection;
