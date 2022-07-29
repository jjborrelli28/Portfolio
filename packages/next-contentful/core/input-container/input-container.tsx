import { styled } from "~next-contentful/config";

export const InputContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minh: "1.6rem",

  "@bp2": {
    minh: "2rem",
  },
});
