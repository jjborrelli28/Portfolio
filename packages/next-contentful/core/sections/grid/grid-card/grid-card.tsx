import {
  Asset,
  Card,
  Icon,
  ImageProps,
  NavigationItemFieldsProps,
  TextLink,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { css, styled } from "~next-contentful/config";

export const GridCard = ({ props }: GridCardProps) => {
  const { links, asset, headline, tags, body } = props.fields;

  const allTags = tags.length;

  const allLinks = links.length;

  return (
    <Card
      css={{
        borderRadius: "2px",
        backgroundColor: "$bgCard",
        boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.2)",
      }}
    >
      <Card.Link
        href={
          links.filter((link) => link.fields.reference === "web")[0].fields.url
        }
        target="_blank"
        ariaLabel={`${asset.fields.title}'s web`}
      >
        <Card.Image image={asset} curtainMessage={"VISIT PROJECT"} top />
      </Card.Link>
      <Card.TextContainer>
        <HeadTextContainer>
          <Card.Title>{textRenderer(headline)}</Card.Title>
          {tags && (
            <TagsContainer
              css={{
                gridTemplateColumns: `repeat(${allTags}, 20px)`,
                "@bp2": {
                  gridTemplateColumns: `repeat(${allTags}, 25px)`,
                },
              }}
            >
              {tags.map((tag, index) => {
                return (
                  <Asset
                    key={index}
                    asset={tag}
                    assetClassName={tagStyles}
                    layout="responsive"
                    placeholder="blur"
                    sizes="5vw"
                    loading="lazy"
                  />
                );
              })}
            </TagsContainer>
          )}
          <Card.Description>{textRenderer(body, bodyStyles)}</Card.Description>
        </HeadTextContainer>
        {links && (
          <LinksContainer
            css={{
              gridTemplateColumns: `repeat(${allLinks}, 24px)`,
              "@bp2": {
                gridTemplateColumns: `repeat(${allLinks}, 30px)`,
              },
            }}
          >
            {links.map((link, index) => {
              return (
          
                  <Icon type={link.fields.reference} />
   
              );
            })}
          </LinksContainer>
        )}
      </Card.TextContainer>
    </Card>
  );
};

const HeadTextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.48rem",

  "@bp2": {
    gap: "0.6rem",
  },
});

const TagsContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "20px",
  gap: "8px",

  "@bp2": {
    gridTemplateRows: "25px",
    gap: "10px",
  },
});

const tagStyles = css({
  w: "25px",
})();

const bodyStyles = css({ mt: "0.48rem", mb: "0", "@bp2": { mt: "0.6rem" } })();

const LinksContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "24px",
  gap: "8px",
  color: "$line",
  fontSize: "$5",

  "@bp2": {
    gridTemplateRows: "30px",
    gap: "10px",
    fontSize: "$7",
  },

  a: {
    color: "$fontTertiary",
    textDecoration: "none",
    transition: "all 0.3s",
    fontSize: "24px",

    "@bp2": {
      fontSize: "30px",
    },

    "&:hover": {
      filter: "brightness(1.15)",
      transform: "scale(1.05)",
    },
  },
});

type GridCardProps = {
  props: GridCardFieldsProps;
  position?: number;
};

export type GridCardFieldsProps = {
  fields: {
    links: NavigationItemFieldsProps[];
    asset: ImageProps;
    headline: TextProps;
    tags: ImageProps[];
    body: TextProps;
  };
};
