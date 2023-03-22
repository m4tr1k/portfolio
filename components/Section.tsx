import { ReactNode } from "react";
import styles from "../styles/components/Section.module.css";
import Container from "./Container";

type TitleProps = {
  sectionTitle: string;
  title: string;
  position: "left" | "center";
  description?: string;
  descriptionSpacing?: boolean;
  size?: "small" | "large";
};

type Props = {
  id: string;
  titleProps?: TitleProps;
  children: ReactNode;
  className?: string;
  animate?: { showClass: string; hideClass: string };
  navbarSpace?: boolean;
};

const Section = (props: Props) => {
  const TitleTag =
    props.titleProps?.size === "small"
      ? (props: any) => <h2>{props.children}</h2>
      : (props: any) => <h1>{props.children}</h1>;

  return (
    <section
      className={`${styles.section} ${
        props.navbarSpace ? styles["navbar-spacing"] : ""
      } ${props.className ? props.className : ""}`}
      id={props.id}
    >
      <Container observe={props.animate}>
        {props.titleProps ? (
          <div
            className={styles.titleContainer}
            style={{ textAlign: props.titleProps.position }}
          >
            <p className={styles.title}>{props.titleProps.sectionTitle}</p>
            <TitleTag>{props.titleProps.title}</TitleTag>
            {props.titleProps.description ? (
              <p
                className={`${styles.description} ${
                  props.titleProps.descriptionSpacing ? styles.spacing : ""
                }`}
              >
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
