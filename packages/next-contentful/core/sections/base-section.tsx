// @ts-nocheck
import { Container, ContainerProps } from "~next-contentful/core";
import { styled } from "~next-contentful/config";
import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

export const BaseSection = forwardRef(
  (
    { children, size, backgroundColor, className = "", id }: BaseSectionProps,
    ref
  ) => {
    return (
      <Section {...{ backgroundColor, id, ref }}>
        <Container
          size={size}
          css={{
            py: "2rem",
            px: size === "n" ? "0" : "2rem",

            "@bp2": {
              py: "6rem",
            },
          }}
          className={clsx({ [className]: className })}
        >
          {children}
        </Container>
      </Section>
    );
  }
);

const Section = styled("section", {
  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: "$bgSectionPrimary",
      },
      secondary: {
        backgroundColor: "$bgSectionSecondary",
      },
    },
  },
});

type BaseSectionProps = {
  children: ReactNode;
  size?: ContainerProps;
  backgroundColor: BackgroundColorBaseSectionProps;
  className?: string;
  id?: string;
};

export type BackgroundColorBaseSectionProps = "primary" | "secondary";
