import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import Section from "../components/Section";
import { getMDXComponent } from "mdx-bundler/client";
import MDXImage from "../components/MDXImage";

type Props = {
  projects: string;
};

const HighlightedProjectSection = (props: Props) => {
  const { t } = useTranslation("home");

  const Component = useMemo(
    () => getMDXComponent(props.projects),
    [props.projects]
  );

  return (
    <Section
      id="highlighted-project"
      titleProps={{
        position: "center",
        title: t("highlighted.title"),
        sectionTitle: t("highlighted.sectionTitle"),
      }}
    >
      <Component
        components={{
          img: MDXImage as React.ComponentType,
        }}
      />
    </Section>
  );
};

export default HighlightedProjectSection;
