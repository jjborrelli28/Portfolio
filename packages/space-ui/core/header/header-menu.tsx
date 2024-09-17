import { styled } from "@space-ui/config";

export const HeaderMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  justifyContent: "space-between",

  "@bp2": {
    flexDirection: "row",
  },
});
