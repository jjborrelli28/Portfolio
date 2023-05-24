import { StyledComponent } from "@stitches/react/types/styled-component";
import { styled } from "~next-contentful/config";
import { PropsWithChildren } from "react";

export const InputLabel = ({
  children,
  size,
  htmlFor,
  restProps,
}: PropsWithChildren<LabelProps>) => {
  return (
    <BaseLabel size={size} htmlFor={htmlFor} {...restProps}>
      {children}
    </BaseLabel>
  );
};

const BaseLabel = styled("label", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "block",
  color: "$fontTertiary",
  fontWeight: "$5",
  transition: "all 0.3s ease",
  cursor: "text",

  variants: {
    size: {
      sm: {
        color: "$fontSecondary",
        fontSize: "$3",
        top: "-0.8rem",

        "@bp2": {
          top: "-1rem",
          fontSize: "$4",
        },
      },
      lg: {
        fontSize: "$5",

        "@bp2": {
          fontSize: "$7",
        },
      },
    },
  },
});

type LabelProps = {
  size: "sm" | "lg";
  htmlFor: string;
  restProps?: StyledComponent;
};
