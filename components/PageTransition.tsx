import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import Animations from "../utils/animations";
import Spinner from "./Spinner";
import styles from "../styles/components/PageTransition.module.css";
import { PageTransitionContext } from "../stores";

let animations: Animations;

const PageTransition = () => {
  const { events } = useRouter();
  const pageTransitionContext = useContext(PageTransitionContext);
  const loadingScreenRef = useRef<HTMLDivElement>(null);
  const globalLoaderRef = useRef<HTMLDivElement>(null);

  if (typeof window !== "undefined") {
    animations = new Animations();
    window.addEventListener("load", () =>
      animations.initialAnimation(globalLoaderRef.current as HTMLDivElement)
    );
  }

  useEffect(() => {
    if (pageTransitionContext.pageLoading) {
      animations.pageTransitionAnimationStart(
        loadingScreenRef.current as HTMLDivElement,
        styles["show"]
      );
    }

    events.on("routeChangeComplete", () => {
      animations.pageTransitionAnimationEnd(
        loadingScreenRef.current as HTMLDivElement,
        styles["show"]
      );
      pageTransitionContext.setPageLoading(false);
    });

    return () => {
      events.off("routeChangeComplete", () => {});
    };
  }, [pageTransitionContext.pageLoading]);

  return (
    <>
      <div ref={loadingScreenRef} className={styles["loading-screen"]} />
      <div ref={globalLoaderRef} className={styles["global-loader"]}>
        <Spinner />
        <p>Loading...</p>
      </div>
    </>
  );
};

export default PageTransition;
