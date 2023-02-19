import Spinner from "./Spinner";
import styles from "../styles/components/ContactButton.module.css";
import { Fragment, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  status: "idle" | "sending" | "sent" | "error";
};

const ContactButton = (props: Props) => {
  const renderStatus = useCallback(() => {
    switch (props.status) {
      case "sending":
        return (
          <Fragment>
            <Spinner color="var(--main-color)" width="1.7em" />
            <p>Sending...</p>
          </Fragment>
        );
      case "sent":
        return (
          <Fragment>
            <FontAwesomeIcon icon={["fas", "check"]} size="lg" />
            <p>Message sent!</p>
          </Fragment>
        );
      case "error":
        return (
          <Fragment>
            <FontAwesomeIcon icon={["fas", "xmark"]} size="lg" />
            <p>Something went wrong. Try again later!</p>
          </Fragment>
        );
    }
  }, [props.status]);

  return (
    <div className={styles.contactButton}>
      {props.status !== "idle" ? (
        <div className={styles.sending}>{renderStatus()}</div>
      ) : undefined}
      <button
        style={{
          color: `var(--main-color)`,
          borderColor: `var(--main-color)`,
        }}
        type="submit"
      >
        Let&apos;s Chat!
      </button>
    </div>
  );
};

export default ContactButton;
