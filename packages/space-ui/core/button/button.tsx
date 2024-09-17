import { css as classCreator, styled } from "@space-ui/config";
import { SpinnerPrimary } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export const Button = ({
  children,
  type = "button",
  size = "md",
  loading = false,
  onClick,
  onSubmit,
  disabled,
  className,
  css,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <BaseButton
      type={type}
      size={size}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled || loading || false}
      className={clsx(
        loading &&
          classCreator({
            "&:before": {
              w: "100%",
            },

            "&:hover": {
              cursor: "wait",
            },
          }).toString(),
        className
      )}
      css={css}
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
        w: "6rem",

        "@bp2": {
          w: "10rem",
        },
      },
    },
  },
});

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  css?: Stitches.CSS;
};
