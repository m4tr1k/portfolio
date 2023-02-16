import { ReactNode, useContext } from "react";
import { InView } from "react-intersection-observer";
import ScrollContext from "../context/ScrollContext";
import styles from "../styles/components/Section.module.css";

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
};

const Section = (props: Props) => {
  const { setActiveIndex } = useContext(ScrollContext);

  const setVisibleSection = (inView: boolean) => {
    if (inView) {
      setActiveIndex(Number.parseInt(props.id));
    }
  };

  return (
    <InView
      as="section"
      onChange={(inView) => setVisibleSection(inView)}
      className={`${styles.section} ${props.className}`}
      threshold={0.8}
      id={props.id}
    >
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
    </InView>
  );
};

export default Section;
