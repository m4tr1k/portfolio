import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/components/Article.module.css";

type Props = {
  info: {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  };
};

type TagProps = {
  name: string;
};

const Article = (props: Props) => {
  const { info } = props;
  const shownTags = info.tags.slice(0, 2);
  const remainingTagsNumber = info.tags.length - shownTags.length;

  return (
    <div className={styles.article}>
      <Image
        className={styles.img}
        src={info.image}
        alt={info.title}
        width={500}
        height={300}
      />
      <div className={styles.info}>
        <div className={styles.content}>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
        </div>
        <div className={styles["additional-info"]}>
          <div className={styles.tags}>
            {shownTags.map((tag) => (
              <Tag name={tag} key={tag}></Tag>
            ))}
            {remainingTagsNumber > 0 && (
              <div className={styles["remaining-tags"]}>
                +{remainingTagsNumber} Tags
              </div>
            )}
          </div>
          <div className={styles.clock}>
            <FontAwesomeIcon icon={["fas", "clock"]} size="lg" />
            <p>5min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tag = (props: TagProps) => {
  return <div className={styles.tag}>{props.name}</div>;
};

export default Article;
