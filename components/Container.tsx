import { InView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  observe?: {
    showClass: string;
    hideClass: string;
  };
};

const Container = (props: Props) => {
  if (props.observe) {
    return (
      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${props.observe!.hideClass} ${
              inView ? props.observe!.showClass : undefined
            }`}
          >
            {props.children}
          </div>
        )}
      </InView>
    );
  } else {
    return <>{props.children}</>;
  }
};

export default Container;
