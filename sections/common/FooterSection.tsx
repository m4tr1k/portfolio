import { useTranslation } from "next-i18next";
import Link from "../../components/Link";
import Logo from "../../components/Logo";
import styles from "../../styles/sections/common/FooterSection.module.css";
import contacts from "../../constants/contacts.json";
import SocialMedia from "../../components/SocialMedia";

const FooterSection = () => {
  const { t } = useTranslation("menu");

  const menuList = t("options", { returnObjects: true }) as any[];
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo inHome={true} color="main" />
        <p className={styles.copyright}>Francisco Fernandes © {year}</p>
        <p>contact@ffwork.space</p>
      </div>
      <div className={styles.content}>
        <div>
          <p>{t("content")}</p>
          <div className={styles.links}>
            {menuList.map((item, index) => {
              return (
                <Link href={"/" + item.url} key={"item-" + index}>
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.socials}>
          {contacts.map((contact, index) => {
            return <SocialMedia info={contact} key={index} />;
          })}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
