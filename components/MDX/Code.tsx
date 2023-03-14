import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import styles from "../../styles/components/MDX/Code.module.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

type Props = {
  children: React.ReactNode;
  className: string;
};

const Code = (props: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <code className={`${props.className} ${styles.code}`}>
      {props.children}
    </code>
  );
};

export default Code;
