import { ReactNode, useContext } from "react";
import { InView } from "react-intersection-observer";
import ScrollContext from "../context/ScrollContext";

type Props = {
  id: string;
  children: ReactNode;
  color?: string;
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
      className={props.className}
      style={{ backgroundColor: props.color }}
      threshold={0.8}
      id={props.id}
    >
      {props.children}
    </InView>
  );
};

export default Section;
