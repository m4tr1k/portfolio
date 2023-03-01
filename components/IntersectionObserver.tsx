import { InView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  observe?: {
    showClass: string;
    hideClass: string;
  };
};

const IntersectionObserver = (props: Props) => {
  if (props.observe) {
    return (
      <InView threshold={0.5} triggerOnce>
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

export default IntersectionObserver;
