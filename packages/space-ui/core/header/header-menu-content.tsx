import { styled } from "@space-ui/config";

export const HeaderMenuContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@bp2": {
    flexDirection: "row",
  },

  variants: {
    status: {
      opened: {
        display: "flex",
      },

      closed: {
        display: "none",
        "@bp2": {
          display: "flex",
        },
      },
    },
  },
});
