import { styled } from "~next-contentful/config";

export const HeaderMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@bp2": {
    flexDirection: "row",
  },
});
