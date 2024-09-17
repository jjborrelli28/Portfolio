import { styled } from "@space-ui/config";

export const HeaderMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$5",

  "@bp2": {
    flexDirection: "row",
  },
});
