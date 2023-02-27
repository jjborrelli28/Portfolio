import { styled } from "~next-contentful/config";

export const Container = styled("div", {
  m: "auto",

  variants: {
    size: {
      xs: {
        maxw: "576px",
      },
      sm: {
        max: "768px",
      },
      md: {
        maxw: "992px",
      },
      lg: {
        maxw: "1200px",
      },
      xl: {
        maxw: "1400px",
      },
      full: {
        maxw: "none",
      },
    },
  },
});

export type ContainerProps = "xs" | "sm" | "md" | "lg" | "xl" | "full";
