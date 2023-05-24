import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  ImageProps,
  RichText,
} from "~next-contentful/core";
import clsx from "clsx";
import { css, styled } from "~next-contentful/config";
import { useInView } from "react-intersection-observer";
import { fadeAnimation } from "~next-contentful/animations";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";

export const Spotlight = ({ section }: SpotlightProps) => {
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
    <Container id={sectionName} size={size} backgroundColor={backgroundColor}>
      <SpotlightPrimaryContainer mode={reverse ? "reverse" : "normal"}>
        <RichText
          content={content}
          css={customContentStyles}
          className={clsx(
            reverse ? reverseContentContainerStyles : contentContainerStyles
          )}
        />
        <Asset
          ref={ref}
          asset={asset}
          layout="responsive"
          placeholder="blur"
          sizes="50vw"
          loading="lazy"
          className={clsx(
            fadeAnimation({
              type: `${inView ? (reverse ? "inLeft" : "inRight") : "out"}`,
              time: 1000,
            }),
            {
              [assetStyles]: reverse,
            }
          )}
        />
      </SpotlightPrimaryContainer>
    </Container>
  );
};

const SpotlightContainer = styled("div", {
  pb: "4rem",

  "@bp2": {
    pt: "4rem",
    pb: "8rem",
  },

  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: "bgPrimary",
      },
      secondary: {
        backgroundColor: "$bgSecondary",
      },
    },
  },
});

export const SpotlightPrimaryContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateAreas: "'text' 'asset'",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr",
  gap: "2rem",

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
  pr: "14rem",
})();

const reverseContentContainerStyles = css({
  gridArea: "text",
  pl: "14rem",
})();

const assetStyles = css({
  gridArea: "asset",
  maxw: "500px",
})();

export type SpotlightProps = {
  section: SportlightFieldsProps;
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
