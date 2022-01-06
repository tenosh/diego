import { createContext } from "react";

type TransitionContextProps = {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
};

export const TransitionContext = createContext<TransitionContextProps>(
  {} as TransitionContextProps
);
