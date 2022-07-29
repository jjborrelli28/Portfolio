import { styled } from "~next-contentful/config";

export const BaseLayout = styled("div", {
  variants: {
    radialGradient: {
      primary: {
        backgroundColor: "$bgPrimary",
        radialGradient: "$bgGradientPrimary",
      },
    },
  },
});
