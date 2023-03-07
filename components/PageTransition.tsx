import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import Animations from "../utils/animations";
import styles from "../styles/components/PageTransition.module.css";
import { PageTransitionContext } from "../stores";
import Logo from "./Logo";
import Spinner from "./Spinner";

let animations: Animations;

if (typeof window !== "undefined") {
  animations = new Animations();
  window.addEventListener("load", animations.initialAnimation);
}

const PageTransition = () => {
  const { events } = useRouter();
  const pageTransitionContext = useContext(PageTransitionContext);
  const loadingScreenRef = useRef<HTMLDivElement>(null);

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
      <div ref={loadingScreenRef} className={styles["loading-screen"]}>
        <Logo inHome={true} outline />
        <Spinner color="var(--main-color)" />
      </div>
      <div className="global-loader">
        <div className="global-loader-container">
          <Logo inHome={true} color="secondary" />
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default PageTransition;
