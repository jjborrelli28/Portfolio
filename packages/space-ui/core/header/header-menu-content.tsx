import { styled } from "@space-ui/config";

export const HeaderMenuContent = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  
  "@bp2": {
    flexDirection: "row",
    alignItems: "center",
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
