import { createContext } from "react";

export const PageTransitionContext = createContext({
  pageLoading: false,
  setPageLoading: (pageLoading: boolean) => {},
});
