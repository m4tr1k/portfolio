import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/components/Navbar.module.css";

type Props = {
  toggleMenu: () => void;
  openMenu: boolean;
};

const Navbar = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      props.toggleMenu();
    });
  }, [props, router.events]);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>F.F.</h1>
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
