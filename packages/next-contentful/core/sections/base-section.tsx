import { Container, ContainerProps } from "~next-contentful/core";
import clsx from "clsx";
import { css as cssProps, styled } from "~next-contentful/config";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import type * as Stitches from "@stitches/react";

export const BaseSection = forwardRef(
  (
    {
      children,
      id,
      size,
      backgroundColor,
      css,
      className = "",
    }: PropsWithChildren<BaseSectionProps>,
    ref: ForwardedRef<any>
  ) => {
    const containerStyles = cssProps({
      py: "$8",
      px: size === "full" ? "$0" : "$8",

      "@bp2": {
        py: "$17",
      },
    }).toString();

    return (
      <Section id={id} ref={ref} backgroundColor={backgroundColor}>
        <Container
          size={size}
          css={css}
          className={clsx(containerStyles, { [className]: className })}
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
  id?: string;
  size?: ContainerProps;
  backgroundColor: BackgroundColorBaseSectionProps;
  css?: Stitches.CSS;
  className?: string;
};

export type BackgroundColorBaseSectionProps = "primary" | "secondary";
