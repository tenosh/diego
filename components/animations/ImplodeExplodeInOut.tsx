import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { TransitionContext } from "@context/transition/TransitionContext";
import { randomNumber } from "@utils/util";
import { ComponentProps } from "interfaces/interfaces";

type Props = ComponentProps & {
  target: string;
  delay?: string;
  durationIn?: string;
  durationOut?: string;
};

gsap.registerPlugin(SplitText);

const ImplodeExplodeInOut = ({
  children,
  target,
  delay,
  durationIn,
  durationOut,
}: Props) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const splitText = new SplitText(target);
    const chars = splitText.chars;
    chars.forEach((char) => {
      // intro animation
      gsap.fromTo(
        char,
        {
          x: randomNumber(-1000, 1000),
          y: randomNumber(-500, 500),
          z: randomNumber(50, 50),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360),
          ease: "power4.out",
        },
        {
          x: 0,
          y: 0,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1,
          delay: 1 + Math.random() * 0.5,
          ease: "power4.out",
        }
      );

      // outro animation
      timeline.add(
        gsap.to(char, 1, {
          x: randomNumber(-2000, 2000),
          y: randomNumber(-1000, 1000),
          z: randomNumber(100, 100),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360),
          ease: "power4.in",
          duration: 0.1,
        }),
        0
      );
    });

    gsap.set(el.current, {
      opacity: 1,
    });
  }, []);

  return <div ref={el}>{children}</div>;
};

export default ImplodeExplodeInOut;
