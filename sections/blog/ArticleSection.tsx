import Section from "../../components/Section";

const ArticleSection = () => {
  return (
    <Section
      titleProps={{
        position: "left",
        sectionTitle: "Blog",
        title: "Written Articles",
        description:
          "Check out and read my articles that talk about various different topics",
      }}
      id="blog"
    >
      <div></div>
    </Section>
  );
};

export default ArticleSection;
