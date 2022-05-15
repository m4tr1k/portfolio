import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../styles/components/Project.module.css";
import ProjectController from "./ProjectController";

type Props = {
  list: string[];
};

const Project = (props: Props) => {
  const [current, setCurrent] = useState(1);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.descriptionContainer}>
        <ReactMarkdown
          components={{
            h1: "h2",
            a: ({ node, ...props }) => (
              <a
                className={styles.link}
                href={props.href}
                target="_blank"
                rel="noreferrer"
              >
                {props.href}
              </a>
            ),
          }}
          children={props.list[current - 1]}
        />
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
