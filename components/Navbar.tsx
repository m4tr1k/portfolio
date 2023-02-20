import styles from "../styles/components/Navbar.module.css";

type Props = {
  toggleMenu: () => void;
};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>F.F.</h1>
      <div>
        <input
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
