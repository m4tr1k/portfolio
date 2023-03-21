import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from ".";
import styles from "../../styles/components/Card/ServiceCard.module.css";

type Props = {
  icon: IconName;
  description: string;
};

const ServiceCard = (props: Props) => {
  return (
    <Card className={styles.card}>
      <FontAwesomeIcon icon={["fas", props.icon]} size="3x" />
      <p className={styles.description}>{props.description}</p>
    </Card>
  );
};

export default ServiceCard;
