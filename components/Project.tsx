import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/components/Project.module.css";

const Project = () => {
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
        <div className={styles.controller}>
          <div className={styles.square}>
            <FontAwesomeIcon icon={faAngleLeft} size="sm" />
          </div>
          <p>1 / 3</p>
          <div className={styles.square}>
            <FontAwesomeIcon icon={faAngleRight} size="sm" />
          </div>
        </div>
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
