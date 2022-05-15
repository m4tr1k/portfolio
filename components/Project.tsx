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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          velit faucibus massa porttitor tempus faucibus et nunc. Aenean viverra
          commodo est eu fringilla. Aliquam vitae consequat purus. Morbi id quam
          sed ipsum bibendum varius et a nisi. Pellentesque euismod volutpat
          dictum. Nunc vel est malesuada enim accumsan tincidunt.
        </p>
        <ProjectController
          setCurrent={setCurrent}
          current={current}
          total={3}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/projects/macbook.webp"
          width={960}
          height={570}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Project;
