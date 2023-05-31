import { styled } from "@space-ui/config";

export const Heading1 = styled("h1", {
  fontSize: "$20",
  lineHeight: "$20",
  m: "0 0 2.25rem",

  "@bp2": {
    fontSize: "$22",
    lineHeight: "$22",
    m: "0 0 2.75rem",
  },
});

export const Heading2 = styled("h2", {
  fontSize: "$17",
  lineHeight: "$17",
  m: "0 0 1.813rem",

  "@bp2": {
    fontSize: "$19",
    lineHeight: "$19",
    m: "0 0 2.125rem",
  },
});

export const Heading3 = styled("h3", {
  fontSize: "$14",
  lineHeight: "$14",
  m: "0 0 1.375rem",

  "@bp2": {
    fontSize: "$16",
    lineHeight: "$16",
    m: "0 0 1.625rem",
  },
});

export const Heading4 = styled("h4", {
  fontSize: "$11",
  lineHeight: "$11",
  m: "0 0 1.063rem",

  "@bp2": {
    fontSize: "$13",
    lineHeight: "$13",
    m: "0 0 1.25rem",
  },
});

export const Heading5 = styled("h5", {
  fontSize: "$8",
  lineHeight: "$8",
  m: "0 0 0.875rem",

  "@bp2": {
    fontSize: "$10",
    lineHeight: "$10",
    m: "0 0 1rem",
  },
});

export const Heading6 = styled("h6", {
  fontSize: "$5",
  lineHeight: "$5",
  m: "0 0 0.625rem",

  "@bp2": {
    fontSize: "$7",
    lineHeight: "$7",
    m: "0 0 0.75rem",
  },
});

export const Paragraph = styled("p", {
  fontSize: "$5",
  lineHeight: "$5",
  my: "0.75rem",

  "@bp2": {
    fontSize: "$7",
    lineHeight: "$7",
  },
});

export const Underline = styled("u", {
  display: "inline !important",
  textDecoration: "none",
});
