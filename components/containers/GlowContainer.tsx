import React, { useRef } from "react";
import styles from "./glow.module.css";
import { ComponentProps } from "interfaces/interfaces";
import useIsomorphicLayoutEffect from "@components/animations/useIsomorphicLayoutEffect";
import { gsap } from "gsap";

type Props = ComponentProps & {
  width?: string;
  height?: string;
};
/**
 * Generic cell-style container.
 * @return {JSX.Element} The JSX code for the component.
 */
const GlowContainer = ({ children, width, height }: Props): JSX.Element => {
  const classes = `${width} ${height} ${styles["cell"]} rounded flex items-center justify-center`;
  const el = useRef(null);
  useIsomorphicLayoutEffect(() => {
    gsap.from(el.current, {
      opacity: 0,
      duration: 1,
      ease: "back",
      delay: 0.5,
    });
  });
  return (
    <div ref={el} className={classes}>
      {children}
    </div>
  );
};

export default GlowContainer;
