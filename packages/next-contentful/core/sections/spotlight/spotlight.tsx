import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  ImageProps,
  TextContainer,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { fadeAnimation } from "~next-contentful/animations";
import { useInView } from "react-intersection-observer";
import { css, styled } from "~next-contentful/config";
import clsx from "clsx";

export const Spotlight = ({ section }: SpotlightProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    isSection,
    reverse,
    headline,
    subheadline,
    body,
    asset,
  } = section.fields;

  const Container = isSection ? BaseSection : SpotlightContainer;

  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <Container {...{ size, backgroundColor }} id={sectionName}>
      {headline && (
        <TextContainer
          css={{
            color: "$fontSecondary",
            mb: "2rem",

            "@bp2": {
              mb: "4rem",
            },
          }}
        >
          {textRenderer(headline)}
        </TextContainer>
      )}
      <SpotlightPrimaryContainer mode={reverse ? "reverse" : "normal"}>
        <TextContainer className={clsx({ [textContainerStyles]: reverse })}>
          {textRenderer(subheadline)}
          {textRenderer(body, bodyStyles)}
        </TextContainer>
        <Asset
          ref={ref}
          asset={asset}
          className={clsx(
            fadeAnimation({
              type: `${inView ? (reverse ? "inLeft" : "inRight") : "out"}`,
              time: 1000,
            }),
            {
              [assetStyles]: reverse,
            }
          )}
          layout="responsive"
          placeholder="blur"
          sizes="50vw"
          loading="lazy"
        />
      </SpotlightPrimaryContainer>
    </Container>
  );
};

const SpotlightContainer = styled("div", {
  py: "2rem",

  "@bp2": {
    py: "4rem",
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

const textContainerStyles = css({
  gridArea: "text",
})();

const assetStyles = css({
  gridArea: "asset",
  maxw: "500px",
})();

const bodyStyles = css({
  mt: "1rem",

  "@bp2": {
    mt: "2rem",
  },
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
    headline: TextProps;
    subheadline: TextProps;
    body: TextProps;
    asset: ImageProps;
  };
};
