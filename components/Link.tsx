import NextLink from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useContext } from "react";
import { PageTransitionContext } from "../stores";

type Props = {
  href: string;
  className?: string;
  locale?: string;
  children: React.ReactNode;
};

const Link = (props: Props) => {
  const router = useRouter();
  const pageTransitionContext = useContext(PageTransitionContext);

  const click = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    pageTransitionContext.setPageLoading(true);
    setTimeout(() => {
      router.push(props.href, undefined, { locale: props.locale });
    }, 300);
  };

  return (
    <NextLink {...props} onClick={(e) => click(e)}>
      {props.children}
    </NextLink>
  );
};

export default Link;
