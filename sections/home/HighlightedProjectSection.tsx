import { useTranslation } from "next-i18next";
import Section from "../../components/Section";
import MDXComponent from "../../components/MDX";

type Props = {
  projects: string;
};

const HighlightedProjectSection = (props: Props) => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="highlighted-project"
      titleProps={{
        position: "center",
        title: t("highlighted.title"),
        sectionTitle: t("highlighted.sectionTitle"),
        description: t("highlighted.description") as string,
      }}
    >
      <MDXComponent content={props.projects} />
    </Section>
  );
};

export default HighlightedProjectSection;
