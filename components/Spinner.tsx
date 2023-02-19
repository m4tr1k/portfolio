import styles from "../styles/components/Spinner.module.css";

type Props = {
  width?: `${number}em`;
  color?: `var(--${string})`;
};

const Spinner = (props: Props) => {
  return (
    <svg
      style={{ width: props.width }}
      className={styles.spinner}
      viewBox="25 25 50 50"
    >
      <circle style={{ stroke: props.color }} r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default Spinner;
