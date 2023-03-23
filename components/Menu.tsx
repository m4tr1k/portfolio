import styles from "../styles/components/Menu.module.css";
import Link from "./Link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Props = {
  showMenu: boolean;
};

const Menu = (props: Props) => {
  const { t } = useTranslation("menu");

  const { locale, asPath } = useRouter();
  const menuList = t("options", { returnObjects: true }) as any[];

  return (
    <div
      className={`${styles.menu} ${props.showMenu ? styles.open : undefined}`}
    >
      <div className={styles.menuContent}>
        {menuList.map((item, index) => {
          return (
            <Link
              href={"/" + item.url}
              key={"item-" + index}
              className={
                item.url === asPath.split("/")[1] ? styles.active : undefined
              }
            >
              <span>0{index + 1}</span>
              <h1>{item.name}</h1>
            </Link>
          );
        })}
      </div>
      <div className={styles.i18n}>
        {["en", "pt"].map((lang) => {
          return (
            <Link
              href={asPath}
              className={locale === lang ? styles.selected : undefined}
              key={lang}
              locale={lang}
            >
              {lang.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
