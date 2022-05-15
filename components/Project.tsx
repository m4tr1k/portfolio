import Image from "next/image";
import { useState } from "react";
import styles from "../styles/components/Project.module.css";
import ProjectController from "./ProjectController";

const Project = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.descriptionContainer}>
        <h2>ICBraga Website</h2>
        <p className={styles.description}>
          Full-stack project made up of a back-end service to manage doctors,
          agreements, specialties, consultations and exams, database, a
          front-end dashboard and a website.<br></br>
          Logo design made from scratch.
        </p>
        <p>
          Link:{" "}
          <a
            className={styles.link}
            href="https://icbraga.pt"
            target="_blank"
            rel="noreferrer"
          >
            https://icbraga.pt
          </a>
        </p>
        <ProjectController
          setCurrent={setCurrent}
          current={current}
          total={3}
        />
      </div>
      <div className={styles.imageContainer}>
        <div style={{ display: "block", width: "100%" }}>
          <Image
            src="/projects/macbook.png"
            width={2255}
            height={1260}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
