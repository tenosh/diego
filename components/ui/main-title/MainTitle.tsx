import React, { useRef } from "react";
import styles from "./main-title.module.css";
import useIsomorphicLayoutEffect from "@components/animations/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

type Props = {
  title: string;
};
gsap.registerPlugin(SplitText);

/**
 * Main website title.
 * @return {JSX.Element} The JSX code for the component.
 */
const MainTitle = ({ title }: Props): JSX.Element => {
  const el = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const splitText = new SplitText(el.current);
    const chars = splitText.chars;
    let _switch = true;
    const tl = gsap.timeline({ delay: 0.5 });
    chars.forEach((char) => {
      const target = _switch ? "x" : "y";
      tl.from(char, {
        [target]: 100,
        opacity: 0,
        ease: "stepped",
        duration: 0.25,
      });
      _switch = !_switch;
    });
  });
  return (
    <div className={styles["main-title"]}>
      <h1 ref={el}>{title}</h1>
    </div>
  );
};

export default MainTitle;
