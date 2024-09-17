import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  Container,
  ContainerProps,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const SliderPrimary = ({ section }: SliderPrimaryProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    customHeadlineStyles,
    pictures,
  } = section.fields;

  const { ref, inView } = useInView();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [AutoScroll({ stopOnMouseEnter: true, stopOnInteraction: false })]
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;

    if (!autoScroll) return;

    autoScroll.isPlaying();
  }, [emblaApi]);

  return (
    <BaseSection id={sectionName} size="full" backgroundColor={backgroundColor}>
      <Container size={size} css={{ px: "$5" }}>
        <RichText
          ref={ref}
          content={headline}
          className={clsx(
            css({
              color: "$fontSecondary",
              h2: {
                mb: "3rem",
              },
            }).toString(),
            fadeAnimation({
              type: inView ? "inLeft" : "out",
              time: 1000,
            })
          )}
          css={customHeadlineStyles}
        />
      </Container>
      <Embla>
        <EmblaViewport ref={emblaRef}>
          <EmblaContainer>
            {pictures.map((picture, i) => (
              <Link key={i} href={picture.fields?.link || "#"} className="">
                <Asset
                  asset={picture}
                  className={clsx(
                    emblaSlider,
                    fadeAnimation({
                      type: inView ? "in" : "out",
                      time: 1000,
                    })
                  )}
                />
              </Link>
            ))}
          </EmblaContainer>
        </EmblaViewport>
      </Embla>
    </BaseSection>
  );
};

const Embla = styled("div", {
  h: "14rem",
});

const EmblaViewport = styled("div", {
  overflow: "hidden",
});

const EmblaContainer = styled("div", {
  display: "flex",
  touchAction: "pan-y pinch-zoom",
});

const emblaSlider = css({
  flex: "0 0 14rem",
  minWidth: 0,
  p: "3.5rem",
  transform: "translate3d(0, 0, 0)",
  transition: "filter 0.3s",

  "&:hover": {
    filter: "brightness(1.25)",
  },
}).toString();

export type SliderPrimaryProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      headline: Document;
      customHeadlineStyles: Stitches.CSS;
      pictures: ImageProps[];
    };
  };
};
