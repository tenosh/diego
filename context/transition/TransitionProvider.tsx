import React, { useState } from "react";
import gsap from "gsap";
import { ComponentProps } from "interfaces/interfaces";
import { TransitionContext } from "./TransitionContext";

const TransitionProvider = ({ children }: ComponentProps) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [background, setBackground] = useState("white");

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        background,
        setBackground,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionProvider };
