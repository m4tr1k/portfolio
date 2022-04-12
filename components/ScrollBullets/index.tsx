import { useState } from "react";
import styles from "../../styles/components/ScrollBullets.module.css";

const ScrollBullets = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`${styles.bullet} ${
            i === activeIndex ? styles.active : undefined
          }`}
          onClick={() => (i !== activeIndex ? setActiveIndex(i) : undefined)}
        ></div>
      ))}
    </div>
  );
};

export default ScrollBullets;
