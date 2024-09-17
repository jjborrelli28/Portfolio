import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css } from "@space-ui/config";
import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  RichText,
  Spotlight,
  SportlightFieldsProps,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export const Spotlights = ({ section }: SpotlightsProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    customHeadlineStyles,
    spotlights,
  } = section.fields;

  const { ref, inView } = useInView();

  return (
    <BaseSection id={sectionName} size={size} backgroundColor={backgroundColor}>
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
      {spotlights?.map((spotlight, index) => (
        <Spotlight
          key={index}
          section={spotlight}
          isLastSpotlight={index === spotlights.length - 1}
        />
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
