class Animations {
  private loader: HTMLElement | undefined;
  private root: HTMLElement | undefined;
  private main: HTMLElement | undefined;
  private loadingScreen: HTMLElement | undefined;

  constructor() {
    if (typeof document !== "undefined") {
      this.loader = document.querySelector(".globalLoader") as HTMLElement;
      this.root = document.querySelector(":root") as HTMLElement;
      this.main = document.getElementById("main") as HTMLElement;
      this.loadingScreen = document.querySelector(
        ".loading-screen"
      ) as HTMLElement;
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

  pageTransitionAnimationStart = () => {
    this.loadingScreen!.classList.add("show");
  };

  pageTransitionAnimationEnd = (setOpenMenu: Function) => {
    setOpenMenu(false);
    return setTimeout(() => {
      this.loadingScreen!.classList.remove("show");
    }, 1000);
  };
}

export default Animations;
