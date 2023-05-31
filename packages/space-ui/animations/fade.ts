import { css, keyframes } from "@space-ui/config";

export const fadeAnimation = ({ type, time = 500, mode }: AnimationProps) => {
  if (!type) {
    return "";
  }

  return css(getAnimationObj(type, time, mode)).toString();
};

export type TypeProps = FadeTypes;

type FadeTypes =
  | "in"
  | "inTop"
  | "inBottom"
  | "inLeft"
  | "inRight"
  | "out"
  | "outTop"
  | "outBottom"
  | "outLeft"
  | "outRight";

type TimeProps = number;

type ModeProps = "mobile" | "desktop";

export type AnimationProps = {
  type?: TypeProps;
  time?: TimeProps;
  mode?: ModeProps;
};

const types = {
  in: keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }),
  inTop: keyframes({
    from: { opacity: 0, transform: "translateY(var(--anim-target, -20px))" },
    to: { opacity: 1, transform: "translateY(0)" },
  }),
  inBottom: keyframes({
    from: { opacity: 0, transform: "translateY(var(--anim-target, 20px))" },
    to: { opacity: 1, transform: "translateY(0)" },
  }),
  inLeft: keyframes({
    from: { opacity: 0, transform: "translateX(var(--anim-target, -20px))" },
    to: { opacity: 1, transform: "translateX(0)" },
  }),
  inRight: keyframes({
    from: { opacity: 0, transform: "translateX(var(--anim-target, 20px))" },
    to: { opacity: 1, transform: "translateX(0)" },
  }),
  out: keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }),
  outTop: keyframes({
    from: { opacity: 1, transform: "translateY(var(--anim-target, -20px))" },
    to: { opacity: 0, transform: "translateY(0)" },
  }),
  outBottom: keyframes({
    from: { opacity: 1, transform: "translateY(var(--anim-target, 20px))" },
    to: { opacity: 0, transform: "translateY(0)" },
  }),
  outLeft: keyframes({
    from: { opacity: 1, transform: "translateX(var(--anim-target, -20px))" },
    to: { opacity: 0, transform: "translateX(0)" },
  }),
  outRight: keyframes({
    from: { opacity: 1, transform: "translateX(var(--anim-target, 20px))" },
    to: { opacity: 0, transform: "translateX(0)" },
  }),
};

const getAnimationObj = (
  type: TypeProps,
  time?: TimeProps,
  mode?: ModeProps
) => {
  return {
    animationName: mode
      ? mode === "mobile"
        ? types[type].toString()
        : "none"
      : types[type].toString(),
    animationDuration: mode
      ? mode === "mobile"
        ? `var(--anim-duration, ${time}ms)`
        : "initial"
      : `var(--anim-duration, ${time}ms)`,
    animationFillMode: mode
      ? mode === "mobile"
        ? "forwards"
        : "none"
      : "forwards",

    "@bp2": mode
      ? {
          animationName: mode === "mobile" ? "none" : types[type].toString(),
          animationDuration:
            mode === "mobile" ? "initial" : `var(--anim-duration, ${time}ms)`,
          animationFillMode: mode === "mobile" ? "none" : "forwards",
        }
      : {},
  };
};
