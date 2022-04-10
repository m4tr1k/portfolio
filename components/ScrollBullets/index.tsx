import styles from "../../styles/components/ScrollButtons.module.css";

const ScrollBullets = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          className={`${styles.bullet} ${i === 0 ? styles.active : undefined}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollBullets;
