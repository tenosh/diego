import { useLayoutEffect, useState } from "react";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (1 + max - min) + min);
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export { randomNumber, useWindowSize };
