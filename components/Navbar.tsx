import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>F.F.</h1>
      <div>
        <input type="checkbox" className={styles.menuToggle} />
        <div className={styles.hamburguerMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;
