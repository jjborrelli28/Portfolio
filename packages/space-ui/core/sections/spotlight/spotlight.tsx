import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export const Spotlight = ({ section, isLastSpotlight }: SpotlightProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    isSection,
    reverse,
    content,
    customContentStyles,
    asset,
  } = section.fields;

  const Container = isSection ? BaseSection : SpotlightContainer;

  const { ref, inView } = useInView();

  return (
    <Container
      id={sectionName}
      ref={ref}
      size={size}
      backgroundColor={backgroundColor}
      isLastSpotlight={isLastSpotlight}
    >
      <SpotlightPrimaryContainer mode={reverse ? "reverse" : "normal"}>
        <RichText
          content={content}
          className={clsx(
            reverse ? reverseContentContainerStyles : contentContainerStyles
          )}
          css={customContentStyles}
        />
        <Asset
          asset={asset}
          className={clsx(
            fadeAnimation({
              type: `${inView ? (reverse ? "inLeft" : "inRight") : "out"}`,
              time: 1000,
            }),
            reverse && assetStyles
          )}
        />
      </SpotlightPrimaryContainer>
    </Container>
  );
};

const SpotlightContainer = styled("div", {
  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: "bgPrimary",
      },
      secondary: {
        backgroundColor: "$bgSecondary",
      },
    },
    isLastSpotlight: {
      true: {
        pb: "0",
        "@bp2": {
          pt: "3rem",
          pb: "6rem",
        },
      },
      false: {
        pb: "3rem",
        "@bp2": {
          pt: "3rem",
          pb: "6rem",
        },
      },
    },
  },
});

export const SpotlightPrimaryContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateAreas: "'text' 'asset'",
  gridTemplateRows: "auto auto",
  gridTemplateColumns: "1fr",
  gap: "$5",

  "@bp2": {
    h: "50vh",
    gap: "4rem",
    gridTemplateRows: "1fr",
  },

  variants: {
    mode: {
      normal: {
        "@bp2": {
          gridTemplateAreas: "'text asset'",
          gridTemplateColumns: "3fr 2fr",
        },
      },

      reverse: {
        "@bp2": {
          gridTemplateAreas: "'asset text'",
          gridTemplateColumns: "2fr 3fr",
        },
      },
    },
  },
});

const contentContainerStyles = css({
  pr: "1rem",

  "@bp2": {
    pr: "4rem",
  },

  "@bp3": {
    pr: "6rem",
  },
}).toString();

const reverseContentContainerStyles = css({
  gridArea: "text",

  "@bp2": {
    pl: "4rem",
  },

  "@bp3": {
    pl: "6rem",
  },
}).toString();

const assetStyles = css({
  gridArea: "asset",
  maxw: "500px",
}).toString();

export type SpotlightProps = {
  section: SportlightFieldsProps;
  isLastSpotlight: boolean;
};

export type SportlightFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    isSection: boolean;
    reverse: boolean;
    content: Document;
    customContentStyles: Stitches.CSS;
    asset: ImageProps;
  };
};
