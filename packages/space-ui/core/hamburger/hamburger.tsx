import { css, styled } from "@space-ui/config";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";

export const Hamburger = ({
  status,
  toggleStatus,
  labelActive = "Opened menu",
  labelInactive = "Closed Menu",
  className,
  css,
}: HamburgerProps) => {
  const opened = status === "opened";

  return (
    <BaseButton
      onClick={toggleStatus}
      aria-label={opened ? labelActive : labelInactive}
      className={clsx(opened ? openedStyle : "", className)}
      css={css}
    >
      <Line />
      <Line />
      <Line />
    </BaseButton>
  );
};

const BaseButton = styled("button", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  b: "0",
  w: "32px",

  "@bp2": {
    display: "none",
  },

  "&:hover": {
    cursor: "pointer",

    span: {
      backgroundColor: "$fontPrimary",
    },
  },
});

const Line = styled("span", {
  w: "32px",
  h: "3px",
  my: "3px",
  display: "block",
  transition: "all ease-out 0.4s",
  transformOrigin: "0 0",
  backgroundColor: "$fontPrimary",
});

const openedStyle = css({
  span: {
    "&:nth-child(1)": { transform: "rotate(45deg) translate(2px, -5px)" },
    "&:nth-child(2)": { transform: "scaleX(0)", backgroundColor: "$violet" },
    "&:nth-child(3)": { transform: "rotate(-45deg) translate(0, 4px)" },
  },
}).toString();

export type HamburgerProps = {
  status: "opened" | "closed";
  toggleStatus: any;
  labelActive?: string;
  labelInactive?: string;
  className?: string;
  css?: Stitches.CSS;
};
