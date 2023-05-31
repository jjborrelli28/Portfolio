import { styled } from "@space-ui/config";

export const NavigationMenu = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  m: "0",
  p: "0",

  "@bp2": {
    flexDirection: "row",
  },
});
