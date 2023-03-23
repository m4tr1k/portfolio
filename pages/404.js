import serverSideTranslations from "../utils/serverSideTranslations";
import Section from "../components/Section";

export default function Custom404() {
  return (
    <Section
      id="404-error"
      titleProps={{
        position: "center",
        sectionTitle: "Not Found",
        title: "Looks like this page does not exist...",
      }}
    >
      <div></div>
    </Section>
  );
}

export async function getStaticProps({ locale }) {
  const translations = await serverSideTranslations(locale, ["menu"]);
  return {
    props: {
      ...translations,
    },
  };
}
