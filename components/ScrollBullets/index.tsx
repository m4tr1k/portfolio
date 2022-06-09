import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";
import styles from "../../styles/components/ScrollBullets.module.css";

const ScrollBullets = () => {
  const { activeIndex } = useContext(ScrollContext);

  return (
    <div className={styles.container}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`${styles.bullet} ${
            i === activeIndex ? styles.active : undefined
          }`}
          onClick={() => {
            document
              .getElementById(i.toString())
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        ></div>
      ))}
    </div>
  );
};

export default ScrollBullets;
