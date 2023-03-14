import { useTranslation } from "next-i18next";
import ContactForm from "../../components/ContactForm";
import Section from "../../components/Section";
import SocialMedia from "../../components/SocialMedia";
import styles from "../../styles/sections/home/ContactSection.module.css";
import contacts from "../../constants/contacts.json";

const ContactSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="contact"
      titleProps={{
        title: t("contacts.title"),
        sectionTitle: t("contacts.sectionTitle"),
        position: "left",
      }}
      className={styles.contactSection}
      animate={{ showClass: styles.show, hideClass: styles.hide }}
    >
      <div className={styles.grid}>
        <div>
          <p className={styles.description}>{t("contacts.description")}</p>
          <div className={styles.contacts}>
            {contacts.map((contact, index) => {
              return <SocialMedia info={contact} key={index} />;
            })}
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;