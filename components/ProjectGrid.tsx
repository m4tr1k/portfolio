import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
};

const ProjectGrid = (props: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div
      ref={ref}
      className={`mdx project-grid-container ${inView ? "show" : undefined}`}
    >
      {props.children}
    </div>
  );
};

export default ProjectGrid;
