import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  className?: string;
};

const Section = (props: Props) => {
  return (
    <InView
      as="section"
      onChange={(inView) => console.log(inView)}
      triggerOnce={true}
      className={props.className}
    >
      {props.children}
    </InView>
  );
};

export default Section;
