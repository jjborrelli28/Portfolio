import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, MQ, styled } from "@space-ui/config";
import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  Card,
  CardFieldsProps,
  ContainerProps,
  Icon,
  RichText,
} from "@space-ui/core";
import { useMediaQuery } from "@space-ui/hook/use-media-query";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type GridProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      content: Document;
      customContentStyles: Stitches.CSS;
      items: CardFieldsProps[];
    };
  };
};

export const Grid = ({ section }: GridProps) => {
  const isDesktop = useMediaQuery(MQ.md);

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [controls, setControls] = useState({
    hasPrevButton: false,
    hasNextButton: section.fields.items.length > 1 ? true : false,
  });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setControls({
      hasPrevButton: emblaApi.canScrollPrev(),
      hasNextButton: emblaApi.canScrollNext(),
    });
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setControls({
      hasPrevButton: emblaApi.canScrollPrev(),
      hasNextButton: emblaApi.canScrollNext(),
    });
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setControls({
      hasPrevButton: emblaApi.canScrollPrev(),
      hasNextButton: emblaApi.canScrollNext(),
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  const { ref, inView } = useInView();

  const {
    sectionName,
    size,
    backgroundColor,
    content,
    customContentStyles,
    items,
  } = section.fields;

  const { hasPrevButton, hasNextButton } = controls;

  return (
    <BaseSection id={sectionName} size={size} backgroundColor={backgroundColor}>
      <RichText
        ref={ref}
        content={content}
        className={clsx(
          css({
            color: "$fontSecondary",
            h2: {
              mb: "1rem",
            },
            "@bp2": {
              h2: {
                mb: "3rem",
              },
            },
          }).toString(),
          fadeAnimation({
            type: inView ? "inLeft" : "out",
            time: 1000,
          })
        )}
        css={customContentStyles}
      />
      {isDesktop ? (
        <CardContainer>
          {items?.map((item: CardFieldsProps, i) => (
            <GridCard key={i} data={item} />
          ))}
        </CardContainer>
      ) : (
        <>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {items?.map((item: CardFieldsProps, i) => (
                <EmblaSlider key={i}>
                  <GridCard data={item} />
                </EmblaSlider>
              ))}
            </EmblaContainer>
          </EmblaViewport>
          {hasPrevButton || hasNextButton ? (
            <ControlContainer>
              <ControllButton
                type="prev"
                onClick={onPrevButtonClick}
                disabled={!hasPrevButton}
              />
              <ControllButton
                type="next"
                onClick={onNextButtonClick}
                disabled={!hasNextButton}
              />
            </ControlContainer>
          ) : null}
        </>
      )}
    </BaseSection>
  );
};

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$8",

  "@bp2": {
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    py: "$5",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  },
});

const GridCard = ({
  data,
  className,
}: {
  data: CardFieldsProps;
  className?: string;
}) => {
  const { title, asset, content, customContentStyles } = data.fields;

  return (
    <Card
      css={{
        borderRadius: "2px",
        backgroundColor: "$bgCard",
        boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.2)",
      }}
      className={className}
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
};

const EmblaViewport = styled("div", {
  overflow: "hidden",
});

const EmblaContainer = styled("div", {
  display: "flex",
  touchAction: "pan-y pinch-zoom",
});

const EmblaSlider = styled("div", {
  flex: "0 0 100%",
  minWidth: 0,
  p: "$8",
  transform: "translate3d(0, 0, 0)",
});

const ControlContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  px: "calc($8 - 10px)",
  pb: "$8",
});

const ControllButton = ({
  type,
  onClick,
  disabled,
}: {
  type: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    className={css({
      p: "0",
      display: "flex",
      alignItems: "center",
      border: "none",
      backgroundColor: "transparent",
    }).toString()}
    disabled={disabled}
  >
    <Icon
      type="arrow-down"
      className={css({
        h: "$8",
        w: "$8",
        color: "$line",
        transform: type === "prev" ? "rotate(90deg)" : "rotate(-90deg)",
        visibility: disabled ? "hidden" : "visible",
      }).toString()}
    />
  </button>
);
