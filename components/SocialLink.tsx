import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  url: string;
  icon: IconDefinition;
};

const SocialLink = (props: Props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </a>
  );
};

export default SocialLink;
