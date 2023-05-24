import { PropsWithChildren } from "react";
import { styled } from "~next-contentful/config";
import { SpinnerPrimary } from "~next-contentful/core";

export const Button = ({
  children,
  type = "button",
  size = "md",
  loading = false,
  onClick,
  onSubmit,
  disabled,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <BaseButton
      {...{ type, size, onClick, onSubmit }}
      css={
        loading
          ? {
              "&:before": {
                w: "100%",
              },

              "&:hover": {
                cursor: "wait",
              },
            }
          : {}
      }
      disabled={disabled || loading || false}
    >
      {loading ? <SpinnerPrimary size="sm" /> : children}
    </BaseButton>
  );
};

export const BaseButton = styled("button", {
  position: "relative",
  backgroundColor: "transparent",
  color: "$fontTertiary",
  fontSize: "$5",
  fontWeight: "$3",
  b: "solid $fontTertiary 1px",
  borderRadius: "2px",
  p: "0.4rem 1rem",
  transition: "all .3s",
  overflow: "hidden",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@bp2": {
    fontSize: "$7",
  },

  "&:before": {
    position: "absolute",
    content: "",
    top: "0",
    left: "0",
    h: "100%",
    w: "0%",
    backgroundColor: "$fontSecondary",
    transition: "all ease-in 0.3s",
    borderRadius: "2px",
    zIndex: -1,
  },

  "&:hover": {
    color: "$white",
    cursor: "pointer",

    "&:before": {
      w: "100%",
    },
  },

  variants: {
    size: {
      sm: {
        w: "4.5rem",

        "@bp2": {
          w: "5rem",
        },
      },
      md: {
        w: "6rem",

        "@bp2": {
          w: "7rem",
        },
      },
      lg: {
        w: "8rem",

        "@bp2": {
          w: "10rem",
        },
      },
    },
  },
});

type ButtonProps = {
  type: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: any;
  onSubmit?: any;
  disabled?: boolean;
};
