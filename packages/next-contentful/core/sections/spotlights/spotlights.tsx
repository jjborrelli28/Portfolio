import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  RichText,
  Spotlight,
  SportlightFieldsProps,
} from "~next-contentful/core";
import { useInView } from "react-intersection-observer";
import { fadeAnimation } from "~next-contentful/animations";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";

export const Spotlights = ({ section }: SpotlightsProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    customHeadlineStyles,
    spotlights,
  } = section.fields;

  const { ref: headlineRef, inView: headlineInView } = useInView();

  return (
    <BaseSection id={sectionName} size={size} backgroundColor={backgroundColor}>
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
      {spotlights?.map((spotlight, index) => (
        <Spotlight key={index} section={spotlight} />
      ))}
    </BaseSection>
  );
};

export type SpotlightsProps = {
  section: {
    fields: {
      sectionName: string;
      size?: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      headline: Document;
      customHeadlineStyles: Stitches.CSS;
      spotlights: SportlightFieldsProps[];
    };
  };
};
