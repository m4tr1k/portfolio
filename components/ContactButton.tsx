import Spinner from "./Spinner";
import styles from "../styles/components/ContactButton.module.css";
import { Fragment, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";

type Props = {
  status: "idle" | "sending" | "sent" | "error";
};

const ContactButton = (props: Props) => {
  const { t } = useTranslation("contact");

  const renderStatus = useCallback(() => {
    switch (props.status) {
      case "sending":
        return (
          <Fragment>
            <Spinner color="var(--main-color)" width="1.7em" />
            <p>{t("contacts.messageStatus.sending")}</p>
          </Fragment>
        );
      case "sent":
        return (
          <Fragment>
            <FontAwesomeIcon icon={["fas", "check"]} size="lg" />
            <p>{t("contacts.messageStatus.sent")}</p>
          </Fragment>
        );
      case "error":
        return (
          <Fragment>
            <FontAwesomeIcon icon={["fas", "xmark"]} size="lg" />
            <p>{t("contacts.messageStatus.error")}</p>
          </Fragment>
        );
    }
  }, [props.status, t]);

  return (
    <div className={styles.contactButton}>
      <button
        style={{
          color: `var(--main-color)`,
          borderColor: `var(--main-color)`,
        }}
        type="submit"
      >
        {t("contacts.inputs.submit")}
      </button>
      {props.status !== "idle" ? (
        <div className={styles.sending}>{renderStatus()}</div>
      ) : undefined}
    </div>
  );
};

export default ContactButton;
