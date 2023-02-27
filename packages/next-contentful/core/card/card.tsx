import { Image, ImageProps, TextContainer } from "~next-contentful/core";
import { css, styled } from "~next-contentful/config";
import { ReactNode } from "react";
import Link from "next/link";

export const Card = ({ children, css, className }: CardProps) => {
  return <CardContainer {...{ css, className }}>{children}</CardContainer>;
};

const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

type CardProps = {
  children: ReactNode;
  css?: any;
  className?: string;
};

export const CardLink = ({
  children,
  href,
  target = "_self",
  ariaLabel,
}: CardLinkProps) => {
  return (
    <Link href={href} target={target} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};

type CardLinkProps = {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  ariaLabel: string;
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
        })()}
        layout="responsive"
        placeholder="blur"
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

export const CardTextContainer = ({ children }: CardTextContainerProps) => {
  return (
    <TextContainer
      css={{
        p: "1.2rem",
        h: "100%",
        justifyContent: "space-between",
        gap: "0.64rem",

        "@bp2": {
          p: "1.5rem",
          gap: "0.8rem",
        },
      }}
    >
      {children}
    </TextContainer>
  );
};

type CardTextContainerProps = {
  children: ReactNode;
};

export const CardTitle = styled("div", {
  "*": {
    color: "$fontSecondary",

    "@bp2": {
      color: "$fontSecondary",
    },
  },
});

export const CardDescription = styled("div", {
  "*": {
    color: "$fontPrimary",
    fontSize: "$5",
    my: "0.5rem",

    "@bp2": {
      fontSize: "$6",
    },
  },
});

Card.Link = CardLink;
Card.Image = CardImage;
Card.TextContainer = CardTextContainer;
Card.Title = CardTitle;
Card.Description = CardDescription;
