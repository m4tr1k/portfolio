import styles from "../styles/components/Skill.module.css";

type Props = {
  name: string;
  level: number;
};

const Skill = (props: Props) => {
  return (
    <div className={styles.container}>
      <p>{props.name}</p>
      <div className={styles.circleContainer}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.circle} ${
              i < props.level ? styles.active : undefined
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
