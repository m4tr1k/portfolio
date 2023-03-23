import { useTranslation } from "next-i18next";
import ContactForm from "../../components/ContactForm";
import Section from "../../components/Section";
import styles from "../../styles/sections/common/ContactSection.module.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  return (
    <ReCaptchaProvider>
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
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </Section>
    </ReCaptchaProvider>
  );
};

export default ContactSection;
