import { createContext } from "react";

const ScrollContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
});

export default ScrollContext;
