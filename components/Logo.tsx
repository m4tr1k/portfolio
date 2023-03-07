import styles from "../styles/components/Logo.module.css";
import Link from "./Link";

type Props = {
  color?: "main" | "secondary";
  inHome: boolean;
  outline?: boolean;
};

const Logo = (props: Props) => {
  const logo = (
    <h1
      style={{ color: props.color ? `var(--${props.color}-color)` : undefined }}
      className={`${styles.logo} ${props.outline ? styles.outline : ""}`}
    >
      F.F.
    </h1>
  );

  if (!props.inHome) {
    return <Link href="/">{logo}</Link>;
  } else {
    return logo;
  }
};

export default Logo;
