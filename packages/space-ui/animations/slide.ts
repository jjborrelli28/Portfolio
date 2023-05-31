import { css, keyframes } from "@space-ui/config";

export const slidePrimaryAnimation = ({
  element,
  time,
}: SlidePrimaryAnimationProps) => {
  return css({
    h: "100%",
    w: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    animationName: keyframes({
      from: {
        transform:
          element === "primary" ? "translateX(0%)" : "translateX(100%)",
      },
      to: {
        transform:
          element === "primary" ? "translateX(-100%)" : "translateX(0%)",
      },
    }).toString(),
    transform: "translateX(-100%)",
    animationDirection: "linear",
    animationDuration: `${time}ms`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: "runing",
  }).toString();
};

type SlidePrimaryAnimationProps = {
  element: "primary" | "secondary";
  time: number ;
};
