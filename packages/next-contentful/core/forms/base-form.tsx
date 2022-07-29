import { styled } from "~next-contentful/config";

export const BaseForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  "@bp2": {
    gap: "2rem",
  },
});
