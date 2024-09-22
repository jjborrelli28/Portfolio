import { css } from "@space-ui/config";

export const primaryUnderlineAnimation = css({
  position: "relative",

  "&::after": {
    content: "",
    position: "absolute",
    bottom: "-6px",
    left: "0",
    w: "100%",
    h: "3px",
    backgroundColor: "$line",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform ease-out 0.3s",

    "@bp2": {
      bottom: "-4px",
      h: "2px",
    },
  },

  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}).toString();

export const secondaryUnderlineAnimation = ({
  time,
  active,
}: secondaryUnderlineAnimationProps) => {
  return css({
    position: "relative",
    display: "inline-block",

    "&::before": {
      left: "0",
      right: "0",
      bottom: "0",
      content: '""',
      position: "absolute",
      transform: "scaleX(0)",
      transition: `transform ${time}ms cubic-bezier(0.0, 0, 0.2, 1) 0s`,
      transitionDelay: "0.5s",
      transformOrigin: "bottom left",
      pointerEvents: "none",
      zIndex: "-1",
    },

    "&:before": {
      bottom: "0rem",
      bb: "0.2rem solid $line",
      transform: active ? "scaleX(1) !important" : "",
    },
  }).toString();
};

type secondaryUnderlineAnimationProps = {
  time: number;
  active: boolean;
};
