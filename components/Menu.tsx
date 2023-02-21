import styles from "../styles/components/Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  showMenu: boolean;
};

const Menu = (props: Props) => {
  const { locale } = useRouter();

  const menuList = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div
      className={`${styles.menu} ${props.showMenu ? styles.open : undefined}`}
    >
      <div className={styles.menuContent}>
        {menuList.map((item, index) => {
          return (
            <div key={"item-" + index}>
              <Link href={item.url}>
                <span>0{index + 1}</span> {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.i18n}>
        {["en", "pt"].map((lang, index) => {
          return (
            <Link
              href={"/"}
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
