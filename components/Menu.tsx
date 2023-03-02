import styles from "../styles/components/Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Props = {
  showMenu: boolean;
};

const Menu = (props: Props) => {
  const { t } = useTranslation("menu");
  const { locale, pathname } = useRouter();

  const menuList = [
    {
      name: t("about"),
      url: "/about",
    },
    {
      name: t("portfolio"),
      url: "/portfolio",
    },
    {
      name: t("blog"),
      url: "/blog",
    },
  ];

  return (
    <div
      className={`${styles.menu} ${props.showMenu ? styles.open : undefined}`}
    >
      <div className={styles.menuContent}>
        {menuList.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={"item-" + index}
              className={item.url === pathname ? styles.active : undefined}
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
              href={pathname}
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
