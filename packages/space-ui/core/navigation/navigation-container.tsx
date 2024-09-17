import { styled } from "@space-ui/config";

export const NavigationContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",

  "@bp2": {
    flexDirection: "row",
  },
});
