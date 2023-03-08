import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Input.module.css";

type Props = {
  info: {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    icon?: string;
  };
};

type InputWithIconProps = {
  icon?: string;
  children: React.ReactNode;
};

const Input = (props: Props) => {
  return (
    <>
      <label htmlFor={props.info.name} hidden={true}>
        {props.info.name}
      </label>
      {props.info.type === "textarea" ? (
        <textarea
          name={props.info.name}
          placeholder={props.info.placeholder}
          className={styles.textarea}
          required={props.info.required}
        />
      ) : (
        <InputWithIcon icon={props.info.icon}>
          <input
            type={props.info.type}
            name={props.info.name}
            placeholder={props.info.placeholder}
            className={styles.input}
            required={props.info.required}
          />
        </InputWithIcon>
      )}
    </>
  );
};

const InputWithIcon = (props: InputWithIconProps) => {
  if (!props.icon) return <>{props.children}</>;

  return (
    <div className={styles.inputIcon}>
      <FontAwesomeIcon icon={["fas", props.icon as any]} size="lg" />
      {props.children}
    </div>
  );
};

export default Input;
