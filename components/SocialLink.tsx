import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  url: string;
  icon: IconName;
};

const SocialLink = (props: Props) => {
  return (
    <a href={props.url} target="_blank">
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </a>
  );
};

export default SocialLink;
