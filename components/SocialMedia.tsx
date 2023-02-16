import styles from "../styles/components/SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type Props = {
  info: {
    name: string;
    icon: string;
    url: string;
  };
};

const SocialMedia = (props: Props) => {
  return (
    <a className={styles.socialMedia} href={props.info.url} target="_blank">
      <FontAwesomeIcon icon={["fab", props.info.icon as IconName]} size="2x" />
      <p>{props.info.name}</p>
    </a>
  );
};

export default SocialMedia;
