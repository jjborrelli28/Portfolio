import { Document } from "@contentful/rich-text-types";
import { bounceAnimation, fadeAnimation } from "@space-ui/animations";
import { css } from "@space-ui/config";
import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  Icon,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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
      id={sectionName}
      size={size}
      backgroundColor={backgroundColor}
      css={{
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
      }}
    >
      <RichText
        ref={ref}
        content={content}
        className={fadeAnimation({
          type: inView ? "inLeft" : "out",
          time: 1000,
        })}
        css={customContentStyles}
      />
      <Asset
        asset={asset}
        sizes="50vw"
        priority
        assetClassName={fadeAnimation({
          type: inView ? "inRight" : "out",
          time: 1000,
        })}
        css={{ maxw: "500px" }}
      />
      <Link href={arrowDownLink}>
        <a aria-label="Arrow scroll indicator">
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
