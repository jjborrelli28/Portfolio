import { styled } from "@space-ui/config";

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
