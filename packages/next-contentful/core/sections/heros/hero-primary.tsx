import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  Icon,
  ImageProps,
} from "~next-contentful/core";
import { RichText } from "~next-contentful/core/rich-text/rich-text";
import { Document } from "@contentful/rich-text-types";
import { useInView } from "react-intersection-observer";
import { css } from "~next-contentful/config";
import clsx from "clsx";
import Link from "next/link";
import { fadeAnimation } from "~next-contentful/animations";
import { bounceAnimation } from "~next-contentful/animations/bounce";
import type * as Stitches from "@stitches/react";

export const HeroPrimary = ({ section }: HeroPrimaryProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    content,
    customContentStyles,
    asset,
    arrowDownLink,
  } = section.fields;

  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <BaseSection
      {...{
        id: sectionName,
        size,
        backgroundColor,
        css: {
          position: "relative",
          display: "grid",
          gridTemplateRows: "2fr 3fr",
          gridTemplateColumns: "1fr",
          h: "100vh",
          pt: "$headerMobile",

          "@bp2": {
            gridTemplateRows: "1fr",
            gridTemplateColumns: "3fr 2fr",
            pt: "$headerDesktop",
          },
        },
      }}
    >
      <RichText
        {...{
          content,
          css: customContentStyles,
        }}
      />
      <Asset
        {...{
          ref,
          asset,
          css: { maxw: "500px" },
          assetClassName: clsx(
            fadeAnimation({
              type: inView ? "inRight" : "out",
              time: 1000,
            })
          ),
          layout: "responsive",
          sizes: "50vw",
        }}
        priority
      />
      <Link href={arrowDownLink} aria-label="Arrow scroll indicator">
        <a>
          <Icon
            type="arrow-down"
            className={clsx(
              arrowStyles(inView),
              bounceAnimation({ time: 2000 })
            )}
          />
        </a>
      </Link>
    </BaseSection>
  );
};

const arrowStyles = (inView: boolean) => {
  return css({
    color: inView ? "$line" : "transparent",
    fontSize: "$20",
    position: "absolute",
    bottom: "$4",
    left: "calc(50% - 30px)",
    transition: "color ease 0.3s",

    "@bp2": {
      bottom: "$8",
    },
  }).toString();
};

export type HeroPrimaryProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      content: Document;
      customContentStyles: Stitches.CSS;
      asset: ImageProps;
      arrowDownLink: string;
    };
  };
};
