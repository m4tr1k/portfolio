import styles from "../styles/components/Logo.module.css";
import Link from "next/link";

type Props = {
  inHome: boolean;
};

const Logo = (props: Props) => {
  if (!props.inHome) {
    return (
      <Link href="/">
        <h1 className={styles.logo}>F.F.</h1>
      </Link>
    );
  } else {
    return <h1 className={styles.logo}>F.F.</h1>;
  }
};

export default Logo;
