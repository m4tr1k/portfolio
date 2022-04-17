import { Fragment } from "react";
import styles from "../styles/components/Computer.module.css";
import Image from "next/image";
import { saveAs } from "file-saver";

const Computer = () => {
  const downloadCV = async () => {
    try {
      const response = await fetch("/api/download-cv", {
        method: "GET",
      });
      const blob = await response.blob();
      saveAs(blob, "FranciscoFernandes_CV.pdf");
    } catch (e) {}
  };

  return (
    <Fragment>
      <div className={styles.screen}>
        <div className={styles.screenContent}>
          <div className={styles.topBar}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={styles.cv}>
            <p>Double tap the icon to download it!</p>
            <div className={styles.pdf} onDoubleClick={downloadCV}>
              <Image src="/pdf.svg" height={70} width={70} alt="CV Pdf" />
              <p>MyCV.pdf</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stand}></div>
    </Fragment>
  );
};

export default Computer;
