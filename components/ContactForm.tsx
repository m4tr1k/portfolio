import { FormEventHandler, useState } from "react";
import styles from "../styles/components/ContactForm.module.css";
import { useReCaptcha } from "next-recaptcha-v3";
import ContactButton from "./ContactButton";
import { useTranslation } from "next-i18next";
import Input from "./Input";

const ContactForm = () => {
  const { t } = useTranslation("contact");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const { executeRecaptcha } = useReCaptcha();

  const inputs = [
    { name: "name", type: "text", placeholder: t("contacts.inputs.name") },
    { name: "email", type: "email", placeholder: t("contacts.inputs.email") },
    {
      name: "message",
      type: "textarea",
      placeholder: t("contacts.inputs.message"),
    },
  ];

  const sendEmail: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const token = await executeRecaptcha("contact");
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ ...data, token }),
    });
    if (response.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
    }
    (event.target as HTMLFormElement).reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      name="contact"
      method="POST"
      action="/api/form"
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      {inputs.map((input, index) => {
        return (
          <div className={styles.inputGroup} key={index}>
            <Input info={{ ...input, required: true }} />
          </div>
        );
      })}
      <ContactButton status={status} />
    </form>
  );
};

export default ContactForm;
