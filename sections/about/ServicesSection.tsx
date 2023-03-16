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
        sectionTitle: "Services",
        title: "Making Thoughts into Reality",
        description: "I offer a wide spectrum of services including",
        size: "small",
      }}
    >
      <div className={styles.services}>
        <Card icon="mobile-screen" description={`Mobile\nDevelopment`} />
        <Card icon="desktop" description={`Frontend\nDevelopment`} />
        <Card icon="laptop-code" description={`Full Stack\nDevelopment`} />
      </div>
    </Section>
  );
};

export default ServicesSection;
