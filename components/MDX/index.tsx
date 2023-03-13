import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Code from "./Code";
import Image from "./Image";
import Link from "./Link";

type Props = {
  content: string;
};

const MDXComponent = (props: Props) => {
  const Component = useMemo(
    () => getMDXComponent(props.content),
    [props.content]
  );

  return (
    <Component
      components={{
        img: Image as React.ComponentType,
        a: Link as React.ComponentType,
        code: Code as React.ComponentType,
      }}
    />
  );
};

export default MDXComponent;
