import Section from "../../components/Section";
import styles from "../../styles/sections/about/CompaniesSection.module.css";
import companies from "../../constants/companies.json";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const CompaniesSection = () => {
  const { t } = useTranslation("about");

  return (
    <Section
      id="companies"
      className={styles["company-section"]}
      titleProps={{
        position: "center",
        sectionTitle: t("companies.sectionTitle"),
        title: t("companies.title"),
        size: "small",
      }}
    >
      <div className={styles.companies}>
        {companies.map((company, index) => {
          return (
            <a
              href={company.url}
              className={styles.image}
              key={"logo-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={company.imageURL}
                alt={"Logo " + company.name}
                width={company.width}
                height={company.height}
              />
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default CompaniesSection;
