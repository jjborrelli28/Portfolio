import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  RichText,
} from "~next-contentful/core";
import { styled } from "~next-contentful/config";
import { useInView } from "react-intersection-observer";
import { fadeAnimation } from "~next-contentful/animations";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";
import { Card, CardFieldsProps } from "~next-contentful/core/card/card";

export const Grid = ({ section }: GridProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    content,
    customContentStyles,
    items,
  } = section.fields;

  const { ref, inView } = useInView();

  return (
    <BaseSection
      ref={ref}
      id={sectionName}
      size={size}
      backgroundColor={backgroundColor}
    >
      <RichText
        content={content}
        css={
          customContentStyles || {
            color: "$fontSecondary",
            h2: {
              mb: "3rem",
            },
          }
        }
        className={fadeAnimation({
          type: inView ? "inLeft" : "out",
          time: 1000,
        })}
      />
      <CardContainer>
        {items?.map((card: CardFieldsProps) => {
          const { title, asset, content, customContentStyles } = card.fields;

          return (
            <Card
              key={title}
              css={{
                borderRadius: "2px",
                backgroundColor: "$bgCard",
                boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.2)",
              }}
            >
              {asset.fields.link ? (
                <Card.Link
                  href={asset.fields.link}
                  target="_blank"
                  ariaLabel={`${title}'s web`}
                >
                  <Card.Image
                    image={asset}
                    curtainMessage={asset.fields.description}
                    top
                  />
                </Card.Link>
              ) : (
                <Card.Image
                  image={asset}
                  curtainMessage={asset.fields.description}
                  top
                />
              )}
              <Card.Content content={content} css={customContentStyles} />
            </Card>
          );
        })}
      </CardContainer>
    </BaseSection>
  );
};

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
  py: "3rem",

  "@bp2": {
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    py: "2rem",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  },
});

export type GridProps = {
  section: GridFieldsProps;
};

type GridFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    content: Document;
    customContentStyles: Stitches.CSS;
    items: CardFieldsProps[];
  };
};
