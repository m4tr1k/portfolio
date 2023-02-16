import Section from "../../components/Section";
import SocialMedia from "../../components/SocialMedia";
import styles from "../../styles/sections/ContactSection.module.css";
import contacts from "./contacts.json";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      titleProps={{
        title: "Let's have a Chat",
        sectionTitle: "Get In Touch",
        position: "left",
      }}
      className={styles.contactSection}
    >
      <div>
        <p>
          Got an interesting idea and want to make it a reality? Just fill out
          the following form and we’ll keep in touch!
          <br />
          <br />
          Alternatively, you can reach out to me in one of the following social
          networks, or email me at contact@franciscos.space
        </p>
      </div>
      <div className={styles.contacts}>
        {contacts.map((contact, index) => {
          return <SocialMedia info={contact} key={index} />;
        })}
      </div>
    </Section>
  );
};

export default ContactSection;
