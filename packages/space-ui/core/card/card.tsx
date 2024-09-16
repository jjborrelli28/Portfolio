import { Document } from "@contentful/rich-text-types";
import { css, styled } from "@space-ui/config";
import { Image, ImageProps } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import Link from "next/link";
import { ReactNode, PropsWithChildren } from "react";
import { Asset } from "../asset/asset";
import { Icon } from "../icons/icon";
import { Paragraph } from "../rich-text/html-components";
import { RichText, RichTextProps } from "../rich-text/rich-text";

export const Card = ({
  children,
  css,
  className,
}: PropsWithChildren<CardProps>) => {
  return (
    <CardContainer className={className} css={css}>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

type CardProps = {
  className?: string;
  css?: Stitches.CSS;
};

export const CardLink = ({
  children,
  href,
  target = "_self",
  ariaLabel,
  className,
}: PropsWithChildren<CardLinkProps>) => {
  return (
    <Link href={href} target={target}>
      <a aria-label={ariaLabel} className={className}>
        {children}
      </a>
    </Link>
  );
};

type CardLinkProps = {
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  ariaLabel?: string;
  className?: string;
};

export const CardImage = ({
  image,
  curtainMessage,
  top,
  bottom,
}: CardImageProps) => {
  return (
    <ImageContainer>
      {curtainMessage && (
        <ImageCurtain id="curtain-image">
          <h3>{curtainMessage}</h3>
        </ImageCurtain>
      )}
      <Image
        props={image}
        className={css({
          borderRadius: top ? "2px 2px 0 0" : bottom ? "0 0 2px 2px" : "none",
        }).toString()}
        layout="responsive"
        sizes="50vw"
        loading="lazy"
      />
    </ImageContainer>
  );
};

const ImageContainer = styled("div", {
  position: "relative",
  lineHeight: "0",

  "&:hover": {
    "#curtain-image": {
      backgroundColor: "rgba(0,0,0,0.75)",
      color: "#EEEEEE",
    },
  },
});

const ImageCurtain = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  h: "100%",
  w: "100%",
  backgroundColor: "transparent",
  transition: "all 0.3s",
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "transparent",
});

type CardImageProps = {
  image: ImageProps;
  curtainMessage?: ReactNode;
  top?: boolean;
  bottom?: boolean;
};

export const CardContent = ({
  content,
  css: customContentStyles,
  ...restProps
}: RichTextProps) => {
  return (
    <RichText
      css={
        customContentStyles || {
          p: "1.2rem",
          h: "100%",
          justifyContent: "space-between",
          gap: "0.64rem",

          "@bp2": {
            p: "1.5rem",
            gap: "0.8rem",
          },
        }
      }
      content={content}
      renderers={{
        paragraph: (_node, children) => {
          const hasEmbeddedEntryInline = _node.content.some(
            (c) => c.nodeType === "embedded-entry-inline"
          );

          if (hasEmbeddedEntryInline) {
            const embbedEntries = _node.content.filter(
              (c) => c.nodeType === "embedded-entry-inline"
            );

            return (
              <EntryInlineContainer>
                {embbedEntries.map((entry, index) => {
                  const entryType = entry.data.target.sys.contentType.sys.id;

                  if (entryType === "cta")
                    return (
                      <Card.Link
                        key={index}
                        href={entry.data.target.fields.url}
                        target="_blank"
                        ariaLabel={entry.data.target.fields.text}
                      >
                        <Icon
                          type={entry.data.target.fields.reference}
                          className={css({
                            color: "$fontTertiary",
                            w: "18px",
                            h: "18px",
                            "@bp2": { w: "22px", h: "22px" },
                          }).toString()}
                        />
                      </Card.Link>
                    );

                  if (entryType === "image")
                    return (
                      <Asset
                        key={index}
                        asset={entry.data.target}
                        layout="responsive"
                        sizes="5vw"
                        loading="lazy"
                        className={css({
                          m: "0",
                          w: "20px",
                          "@bp2": {
                            w: "25px",
                          },
                        }).toString()}
                      />
                    );
                })}
              </EntryInlineContainer>
            );
          }

          return (
            <Paragraph
              className={css({
                fontSize: "$5",
                a: {
                  color: "$fontTertiary",
                  textDecoration: "none",
                  transition: "all 0.3s",

                  "&:hover": {
                    filter: "brightness(1.15)",
                    transform: "scale(1.05)",
                  },
                },

                "@bp2": {
                  fontSize: "$6",
                },
              }).toString()}
            >
              {children}
            </Paragraph>
          );
        },
      }}
      blockClass={{
        "heading-3": css({ color: "$fontSecondary", mb: "0" }).toString(),
      }}
      {...restProps}
    />
  );
};

const EntryInlineContainer = styled("div", {
  display: "flex",
  gap: "8px",

  "@bp2": {
    gap: "10px",
  },
});

Card.Link = CardLink;
Card.Image = CardImage;
Card.Content = CardContent;

export type CardFieldsProps = {
  fields: {
    title: string;
    asset: ImageProps;
    content: Document;
    customContentStyles: Stitches.CSS;
  };
};
