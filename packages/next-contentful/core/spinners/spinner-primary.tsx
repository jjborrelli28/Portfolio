import { keyframes, styled } from "~next-contentful/config";

export const SpinnerPrimary = ({
  size = "md",
  color = "white",
}: SpinnerPrimaryProps) => {
  const Spinner = styled("div", {
    w: "23px",
    h: "23px",
    borderRadius: "50%",
    b: `3px solid $${color}`,
    background: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: `$${color}`,
    animation: "spin 1.5s linear infinite",
    position: "relative",
    animationName: keyframes({
      "0%": { background: "transparent", transform: "rotate(720deg)" },
    }).toString(),
    animationDuration: `2000ms`,
    animationIterationCount: "infinite",

    variants: {
      size: {
        sm: {
          w: "23px",
          h: "23px",
          b: `2px solid $${color}`,
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: `$${color}`,
        },
        md: {
          w: "33px",
          h: "33px",
          b: `3px solid $${color}`,
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: `$${color}`,
        },
        lg: {
          w: "47px",
          h: "47px",
          b: `4px solid $${color}`,
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: `$${color}`,
        },
      },
    },
  });

  return <Spinner {...{ size }} />;
};

type SpinnerPrimaryProps = {
  size?: "sm" | "md" | "lg";
  color?: "white" | "black" | "fontPrimary" | "fontSecondary" | "fontTertiary";
};
