import styles from "../styles/components/Separator.module.css";

type Props = {
  color: string;
};

const Separator = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={styles.separator}
    />
  );
};

export default Separator;
