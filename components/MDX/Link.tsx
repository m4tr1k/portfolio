import NextLink from "next/link";

type Props = {
  internal: boolean;
  href: string;
  children: React.ReactNode;
};

const Link = (props: Props) => {
  if (props.internal) {
    return <NextLink href={props.href}>{props.children}</NextLink>;
  } else {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }
};

export default Link;
