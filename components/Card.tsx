import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Card.module.css";

type Props = {
  icon: IconName;
  description: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={["fas", props.icon]} size="3x" />
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
