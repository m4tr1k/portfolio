import styles from "../../styles/components/Card/Card.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Card = (props: Props) => {
  return (
    <div style={props.style} className={`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
