import serverSideTranslations from "../utils/serverSideTranslations";
import Section from "../components/Section";

export default function Custom500() {
  return (
    <Section
      id="500-error"
      titleProps={{
        position: "center",
        sectionTitle: "Unexpected Error",
        title: "Looks like something went wrong while rendering this page...",
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
