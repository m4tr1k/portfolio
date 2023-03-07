import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import Section from "../../components/Section";
import { getMDXComponent } from "mdx-bundler/client";
import { Link, Image } from "../../components/MDX";

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
        description: t("highlighted.description") as string,
      }}
    >
      <Component
        components={{
          img: Image as React.ComponentType,
          a: Link as React.ComponentType,
        }}
      />
    </Section>
  );
};

export default HighlightedProjectSection;
