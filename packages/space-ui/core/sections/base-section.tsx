import { css as classCreator, styled } from "@space-ui/config";
import { Container, ContainerProps } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

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
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Section id={id} ref={ref} backgroundColor={backgroundColor}>
        <Container
          size={size}
          className={clsx(
            classCreator({
              py: "$8",
              px: size === "full" ? "$0" : "$5",

              "@bp2": {
                py: "$17",
              },
            }).toString(),
            className
          )}
          css={css}
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
