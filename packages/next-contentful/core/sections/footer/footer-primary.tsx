import {
  BackgroundColorBaseSectionProps,
  Icon,
  NavigationItemFieldsProps,
  TextLink,
} from "~next-contentful/core";
import { styled } from "~next-contentful/config";
import { RichText } from "~next-contentful/core/rich-text/rich-text";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";

export const FooterPrimary = ({ section }: FooterPrimaryProps) => {
  const { backgroundColor, links, copyright, customCopyrightStyles } =
    section.fields;

  return (
    <Footer backgroundColor={backgroundColor}>
      <SocialNetworksContainer>
        {links.map((link, index) => {
          return (
            <TextLink
              key={index}
              href={link.fields.url}
              ariaLabel={`Personal's ${link.fields.reference}`}
            >
              <Icon type={link.fields.reference} />
            </TextLink>
          );
        })}
      </SocialNetworksContainer>
      <CopyrightContainer>
        <RichText
          content={copyright}
          css={
            customCopyrightStyles || {
              color: "$fontTertiary",
            }
          }
        />
        {new Date().getFullYear()}
      </CopyrightContainer>
    </Footer>
  );
};

const SocialNetworksContainer = styled("div", {
  display: "flex",
  gap: "1.15rem",

  "@bp2": {
    gap: "1.5rem",
  },

  a: {
    color: "$fontTertiary",
    textDecoration: "none",
    transition: "all 0.3s",
    fontSize: "$12",

    "@bp2": {
      fontSize: "$14",
    },
  },
});

const CopyrightContainer = styled("div", { display: "flex", "*": { m: "0" } });

const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.25rem",
  p: "2rem",
  color: "$fontTertiary",
  fontSize: "$4",

  "@bp2": { gap: "0.5rem", mt: "6rem", fontSize: "$8" },

  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: "$bgSectionPrimary",
      },
      secondary: {
        backgroundColor: "$bgSectionSecondary",
      },
    },
  },
});

type FooterPrimaryProps = {
  section: FooterPrimaryFieldsProps;
};

export type FooterPrimaryFieldsProps = {
  fields: {
    backgroundColor: BackgroundColorBaseSectionProps;
    links: NavigationItemFieldsProps[];
    copyright: Document;
    customCopyrightStyles: Stitches.CSS;
  };
};
