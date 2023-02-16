import { FormEvent } from "react";
import styles from "../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const inputs = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "message", type: "textarea", placeholder: "Message" },
  ];

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Message sent successfully!");
    }

    inputs.forEach((input) => {
      const element = document.getElementById(input.name) as HTMLFormElement;
      if (element) {
        element.value = "";
      }
    });
  };

  return (
    <form
      onSubmit={(event) => sendEmail(event)}
      name="contact"
      method="POST"
      action="/api/form"
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      {inputs.map((input, index) => {
        return (
          <div className={styles.inputGroup} key={index}>
            <label htmlFor={input.name} hidden={true}>
              {input.name}
            </label>
            {input.type === "textarea" ? (
              <textarea
                placeholder={input.placeholder}
                name={input.name}
                id={input.name}
                required
              />
            ) : (
              <input
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                id={input.name}
                required
              />
            )}
          </div>
        );
      })}
      <button
        style={{
          color: `var(--main-color)`,
          borderColor: `var(--main-color)`,
        }}
        type="submit"
      >
        Let's Chat!
      </button>
    </form>
  );
};

export default ContactForm;
