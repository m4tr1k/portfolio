import { ReactNode } from "react";
import styles from "../styles/components/Section.module.css";
import IntersectionObserver from "./IntersectionObserver";

type TitleProps = {
  sectionTitle: string;
  title: string;
  position: "left" | "center";
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
      <IntersectionObserver observe={props.animate}>
        {props.titleProps ? (
          <div
            className={styles.titleContainer}
            style={{ textAlign: props.titleProps.position }}
          >
            <p>{props.titleProps.sectionTitle}</p>
            <h1>{props.titleProps.title}</h1>
          </div>
        ) : undefined}
        {props.children}
      </IntersectionObserver>
    </section>
  );
};

export default Section;
