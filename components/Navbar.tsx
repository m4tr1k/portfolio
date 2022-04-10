import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" className={styles.menuToggle} />
      <div className={styles.hamburguerMenu}></div>
    </nav>
  );
};

export default Navbar;
