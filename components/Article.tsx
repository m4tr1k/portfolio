import MDXComponent from "./MDX";

type Props = {
  this: Article;
};

const Article = (props: Props) => {
  return (
    <div className="article">
      <MDXComponent content={props.this.content} />
    </div>
  );
};

export default Article;
