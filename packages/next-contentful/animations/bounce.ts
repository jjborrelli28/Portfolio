import { css, keyframes } from "~next-contentful/config";

export const bounceAnimation = ({ time }: BounceAnimationProps) => {
  return css({
    animationName: keyframes({
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-30px)",
      },
      "60%": {
        transform: "translateY(-15px)",
      },
    }).toString(),
    animationDuration: `${time}ms`,
    animationIterationCount: "infinite",
  }).toString();
};

type BounceAnimationProps = {
  time: number;
};
