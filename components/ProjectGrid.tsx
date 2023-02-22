type Props = {
  children: React.ReactNode;
};

const ProjectGrid = (props: Props) => {
  return <div className="mdx project-grid-container">{props.children}</div>;
};

export default ProjectGrid;
