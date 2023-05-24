import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  Container,
  ContainerProps,
  ImageProps,
  Pictures,
  RichText,
} from "~next-contentful/core";
import { styled } from "~next-contentful/config";
import { useInView } from "react-intersection-observer";
import { fadeAnimation } from "~next-contentful/animations";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";

export const SliderPrimary = ({ section }: SliderPrimaryProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    customHeadlineStyles,
    pictures,
  } = section.fields;

  const { ref: headlineRef, inView: headlineInView } = useInView();

  return (
    <BaseSection id={sectionName} size="full" backgroundColor={backgroundColor}>
      <Container size={size} css={{ px: "2rem" }}>
        <RichText
          ref={headlineRef}
          content={headline}
          css={
            customHeadlineStyles || {
              color: "$fontSecondary",
              h2: {
                mb: "3rem",
              },
            }
          }
          className={fadeAnimation({
            type: headlineInView ? "inLeft" : "out",
            time: 1000,
          })}
        />
      </Container>
      <SliderContainer>
        <Pictures
          pictures={pictures}
          sliderType="primary"
          inView={headlineInView}
        />
        <Pictures
          pictures={pictures}
          sliderType="secondary"
          inView={headlineInView}
        />
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
  my: "2rem",
  h: "80px",

  "@bp2": { h: "130px" },
});

export type SliderPrimaryProps = {
  section: SliderPrimaryFieldsProps;
};

type SliderPrimaryFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    headline: Document;
    customHeadlineStyles: Stitches.CSS;
    pictures: ImageProps[];
  };
};
