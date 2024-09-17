import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  Container,
  ContainerProps,
  ImageProps,
  Pictures,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export const SliderPrimary = ({ section }: SliderPrimaryProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    customHeadlineStyles,
    pictures,
  } = section.fields;

  const { ref, inView } = useInView();

  return (
    <BaseSection id={sectionName} size="full" backgroundColor={backgroundColor}>
      <Container size={size} css={{ px: "$5" }}>
        <RichText
          ref={ref}
          content={headline}
          className={clsx(
            css({
              color: "$fontSecondary",
              h2: {
                mb: "3rem",
              },
            }).toString(),
            fadeAnimation({
              type: inView ? "inLeft" : "out",
              time: 1000,
            })
          )}
          css={customHeadlineStyles}
        />
      </Container>
      <SliderContainer>
        <Pictures pictures={pictures} sliderType="primary" inView={inView} />
        <Pictures pictures={pictures} sliderType="secondary" inView={inView} />
      </SliderContainer>
    </BaseSection>
  );
};

const SliderContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  my: "$5",
  h: "80px",

  "@bp2": { h: "130px" },
});

export type SliderPrimaryProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      headline: Document;
      customHeadlineStyles: Stitches.CSS;
      pictures: ImageProps[];
    };
  };
};
