import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/components/Navbar.module.css";
import Logo from "./Logo";

type Props = {
  toggleMenu: () => void;
  openMenu: boolean;
  errorPage: boolean;
};

const Navbar = (props: Props) => {
  const { events, pathname } = useRouter();

  useEffect(() => {
    events.on("routeChangeStart", () => {
      if (props.openMenu) {
        props.toggleMenu();
      }
    });
  }, [props, events]);

  return (
    <nav
      className={`${styles.navbar} ${props.openMenu ? styles.openMenu : ""} ${
        props.errorPage ? styles.errorPage : ""
      }`}
    >
      <Logo color="main" inHome={pathname === "/"} />
      <div>
        <input
          checked={props.openMenu}
          type="checkbox"
          onChange={props.toggleMenu}
          className={styles.menuToggle}
        />
        <div className={styles.hamburguerMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;
