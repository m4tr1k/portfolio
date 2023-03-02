import { ReactNode } from "react";
import styles from "../styles/components/Section.module.css";
import Container from "./Container";

type TitleProps = {
  sectionTitle: string;
  title: string;
  position: "left" | "center";
  description?: string;
};

type Props = {
  id: string;
  titleProps?: TitleProps;
  children: ReactNode;
  className?: string;
  animate?: { showClass: string; hideClass: string };
};

const Section = (props: Props) => {
  return (
    <section className={`${styles.section} ${props.className}`} id={props.id}>
      <Container observe={props.animate}>
        {props.titleProps ? (
          <div
            className={styles.titleContainer}
            style={{ textAlign: props.titleProps.position }}
          >
            <p className={styles.title}>{props.titleProps.sectionTitle}</p>
            <h1>{props.titleProps.title}</h1>
            {props.titleProps.description ? (
              <p className={styles.description}>
                {props.titleProps.description}
              </p>
            ) : undefined}
          </div>
        ) : undefined}
        {props.children}
      </Container>
    </section>
  );
};

export default Section;
