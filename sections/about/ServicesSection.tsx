import { useTranslation } from "next-i18next";
import ServiceCard from "../../components/Card/ServiceCard";
import Section from "../../components/Section";
import styles from "../../styles/sections/about/ServicesSection.module.css";
import Image from "next/image";

type Props = {
  stack: string[];
};

const ServicesSection = (props: Props) => {
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
        <ServiceCard
          icon="mobile-screen"
          description={`${t("services.list.mobile")}`}
        />
        <ServiceCard
          icon="desktop"
          description={`${t("services.list.frontend")}`}
        />
        <ServiceCard
          icon="laptop-code"
          description={`${t("services.list.fullStack")}`}
        />
      </div>
      <div className={styles.stack}>
        <p>{t("services.stack")}</p>
        <div className={styles["stack-container"]}>
          {props.stack.map((tech, index) => {
            return (
              <Image
                alt="Tech Stack"
                key={index}
                src={"/stack/" + tech}
                width={40}
                height={40}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
