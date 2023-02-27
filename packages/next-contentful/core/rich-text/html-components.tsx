import { styled } from "~next-contentful/config";

export const Heading1 = styled("h1", {
  fontSize: "$20",
  lineHeight: "$20",
  m: "0 0 2rem",

  "@bp2": {
    fontSize: "$22",
    lineHeight: "$22",
  },
});

export const Heading2 = styled("h2", {
  fontSize: "$17",
  lineHeight: "$17",
  m: "0 0 2rem",

  "@bp2": {
    fontSize: "$19",
    lineHeight: "$19",
  },
});

export const Heading3 = styled("h3", {
  fontSize: "$14",
  lineHeight: "$14",
  m: "0 0 1.5rem",

  "@bp2": {
    fontSize: "$16",
    lineHeight: "$16",
  },
});

export const Heading4 = styled("h4", {
  fontSize: "$11",
  lineHeight: "$11",
  m: "0 0 1.5rem",

  "@bp2": {
    fontSize: "$13",
    lineHeight: "$13",
  },
});

export const Heading5 = styled("h5", {
  fontSize: "$8",
  lineHeight: "$8",
  m: "0 0 1rem",

  "@bp2": {
    fontSize: "$10",
    lineHeight: "$10",
  },
});

export const Heading6 = styled("h6", {
  fontSize: "$5",
  lineHeight: "$5",
  m: "0 0 1rem",

  "@bp2": {
    fontSize: "$7",
    lineHeight: "$7",
  },
});

export const Paragraph = styled("p", {
  fontSize: "$5",
  lineHeight: "$5",
  m: "0 0 1rem",

  "@bp2": {
    fontSize: "$7",
    lineHeight: "$7",
  },
});

export const Underline = styled("u", {
  display: "inline !important",
  textDecoration: "none",
});
