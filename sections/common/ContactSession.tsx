import { useTranslation } from "next-i18next";
import ContactForm from "../../components/ContactForm";
import Section from "../../components/Section";
import styles from "../../styles/sections/common/ContactSection.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ReCaptchaProviderProps } from "next-recaptcha-v3";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  const ReCaptchaProvider = dynamic(() =>
    import("next-recaptcha-v3").then((mod) => mod.ReCaptchaProvider)
  ) as React.FC<ReCaptchaProviderProps>;

  return (
    <ReCaptchaProvider>
      <div className={styles.grid}>
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
          <p className={styles.description}>{t("contacts.description")}</p>
          <ContactForm />
        </Section>
        <div className={styles.image}>
          <div>
            <div className={styles.overlay}></div>
            <Image
              alt="Contact Image"
              src="/contact-image.jpg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </ReCaptchaProvider>
  );
};

export default ContactSection;
