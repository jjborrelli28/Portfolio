import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  Icon,
  ImageProps,
} from "~next-contentful/core";
import { bounceAnimation } from "~next-contentful/animations/bounce";
import { fadeAnimation } from "~next-contentful/animations";
import { useInView } from "react-intersection-observer";
import { css } from "~next-contentful/config";
import Link from "next/link";
import clsx from "clsx";

import { RichText } from "~next-contentful/core/rich-text/rich-text";
import { Document } from "@contentful/rich-text-types";

export const HeroPrimary = ({ section }: HeroPrimaryProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    asset,
    content,
    customContentStyles,
  } = section.fields;

  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <BaseSection
      {...{ size, backgroundColor, ref }}
      className={sectionStyles}
      id={sectionName}
    >
      <RichText {...{ content, className: css(customContentStyles)() }} />
      <Asset
        asset={asset}
        className={clsx(
          imageStyles,
          fadeAnimation({
            type: inView ? "inRight" : "out",
            time: 1000,
          })
        )}
        layout="responsive"
        placeholder="blur"
        sizes="50vw"
        priority
      />
      <Link href="#about" aria-label="Arrow scroll indicator">
        <Icon
          type="arrow-down"
          className={clsx(arrowStyles(inView), bounceAnimation({ time: 2000 }))}
        />
      </Link>
    </BaseSection>
  );
};

const sectionStyles = css({
  position: "relative",
  display: "grid",
  gridTemplateRows: "2fr 3fr",
  gridTemplateColumns: "1fr",
  h: "100vh",

  "@bp2": {
    gridTemplateRows: "1fr",
    gridTemplateColumns: "3fr 2fr",
  },
})();

const imageStyles = css({ maxw: "500px" })();

const arrowStyles = (inView: boolean) => {
  return css({
    color: inView ? "$line" : "transparent",
    fontSize: "$20",
    position: "absolute",
    bottom: "1rem",
    left: "calc(50% - 30px)",
    transition: "color ease-in 0.3s",

    "@bp2": {
      bottom: "2rem",
    },
  }).toString();
};

export type HeroPrimaryProps = {
  section: HeroPrimaryFieldsProps;
};

type HeroPrimaryFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    content: Document;
    asset: ImageProps;
    customContentStyles: string;
  };
};
