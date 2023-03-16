import Section from "../../components/Section";
import styles from "../../styles/sections/about/CompaniesSection.module.css";
import companies from "../../constants/companies.json";
import Image from "next/image";

const CompaniesSection = () => {
  return (
    <Section
      id="companies"
      className={styles["company-section"]}
      titleProps={{
        position: "center",
        sectionTitle: "Companies",
        title: "Worked For",
        size: "small",
      }}
    >
      <div className={styles.companies}>
        {companies.map((company, index) => {
          return (
            <div className={styles.image} key={"logo-" + index}>
              <Image
                src={company.url}
                alt={"Logo " + company.name}
                width={company.width}
                height={company.height}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default CompaniesSection;
