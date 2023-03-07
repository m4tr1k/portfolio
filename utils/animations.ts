class Animations {
  private root: HTMLElement | undefined;
  private main: HTMLElement | undefined;
  private loader: HTMLDivElement | undefined;

  constructor() {
    if (typeof document !== "undefined") {
      this.root = document.querySelector(":root") as HTMLElement;
      this.main = document.getElementById("main") as HTMLElement;
      this.loader = document.querySelector(".global-loader") as HTMLDivElement;
    }
  }

  initialAnimation = () => {
    return setTimeout(() => {
      window.scrollTo(0, 0);
      this.loader!.style.display = "none";
      this.main!.style.animation = "appear 0.4s ease-in-out";
      this.main!.style.opacity = "1";
      this.root!.style.overflow = "scroll";
    }, 1000);
  };

  pageTransitionAnimationStart = (
    loadingScreen: HTMLDivElement,
    className: string
  ) => {
    loadingScreen.classList.add(className);
  };

  pageTransitionAnimationEnd = (
    loadingScreen: HTMLDivElement,
    className: string
  ) => {
    return setTimeout(() => {
      loadingScreen.classList.remove(className);
    }, 1000);
  };
}

export default Animations;
