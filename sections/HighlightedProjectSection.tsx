import { useTranslation } from "next-i18next";
import Section from "../components/Section";

const HighlightedProjectSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section
      id="highlighted-project"
      titleProps={{
        position: "center",
        title: t("highlighted.title"),
        sectionTitle: t("highlighted.sectionTitle"),
      }}
    >
      <div></div>
    </Section>
  );
};

export default HighlightedProjectSection;
