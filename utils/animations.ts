export const initialAnimation = () => {
  return setTimeout(() => {
    const loader = document.querySelector(".globalLoader") as HTMLElement;
    const root = document.querySelector(":root") as HTMLElement;
    const main = document.getElementById("main");
    if (loader && main) {
      window.scrollTo(0, 0);
      loader.style.display = "none";
      main.style.animation = "appear 0.4s ease-in-out";
      main.style.opacity = "1";
      root.style.overflow = "scroll";
    }
  }, 1000);
};

export const pageTransitionAnimationStart = () => {
  const loadingScreen = document.querySelector(
    ".loading-screen"
  ) as HTMLElement;
  const main = document.getElementById("main");
  if (loadingScreen && main) {
    loadingScreen.classList.add("show");
  }
};

export const pageTransitionAnimationEnd = () => {
  return setTimeout(() => {
    const loadingScreen = document.querySelector(
      ".loading-screen"
    ) as HTMLElement;
    const main = document.getElementById("main");
    if (loadingScreen && main) {
      loadingScreen.classList.remove("show");
    }
  }, 1000);
};
