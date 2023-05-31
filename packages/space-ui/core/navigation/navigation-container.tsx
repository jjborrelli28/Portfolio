import { styled } from "@space-ui/config";

export const NavigationContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@bp2": {
    flexDirection: "row",
  },
});
