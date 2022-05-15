import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/ProjectController.module.css";

type Props = {
  setCurrent: Function;
  current: number;
  total: number;
};

const ProjectController = (props: Props) => {
  const changeCurrent = (changedCurrent: number) => {
    if (changedCurrent <= 3 && changedCurrent >= 1) {
      props.setCurrent(changedCurrent);
    }
  };

  return (
    <div className={styles.controller}>
      <div
        className={
          props.current === 1
            ? styles.square + " " + styles.disabled
            : styles.square
        }
        onClick={() => changeCurrent(props.current - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="sm" />
      </div>
      <p>
        <span>{props.current}</span> / <span>{props.total}</span>
      </p>
      <div
        className={
          props.current === props.total
            ? styles.square + " " + styles.disabled
            : styles.square
        }
        onClick={() => changeCurrent(props.current + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} size="sm" />
      </div>
    </div>
  );
};

export default ProjectController;
