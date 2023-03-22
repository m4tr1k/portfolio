import Image from "next/image";
import Link from "next/link";
import Card from ".";
import styles from "../../styles/components/Card/PortfolioCard.module.css";

type Props = {
  projectInfo: Project;
};

const PortfolioCard = (props: Props) => {
  return (
    <Card
      style={{
        backgroundColor: props.projectInfo.color,
      }}
      className={styles.card}
    >
      <Link href={"/portfolio/" + props.projectInfo.id}>
        <div className={styles.overlay}>
          <div className={styles["project-description"]}>
            <p>{props.projectInfo.position}</p>
            <h3>{props.projectInfo.title}</h3>
          </div>
        </div>
        <Image
          alt={"Image of " + props.projectInfo.title}
          src={props.projectInfo.image}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
      </Link>
    </Card>
  );
};

export default PortfolioCard;
