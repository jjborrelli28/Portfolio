import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  GridCard,
  GridCardFieldsProps,
  TextContainer,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { fadeAnimation } from "~next-contentful/animations";
import { css, styled } from "~next-contentful/config";
import { useInView } from "react-intersection-observer";

export const Grid = ({ section }: GridProps) => {
  const { sectionName, size, backgroundColor, headline, items } =
    section.fields;

  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <BaseSection {...{ size, backgroundColor, ref }} id={sectionName}>
      <TextContainer
        className={fadeAnimation({
          type: inView ? "inLeft" : "out",
          time: 1000,
        })}
      >
        {textRenderer(headline, headlineStyles)}
      </TextContainer>
      <CardContainer>
        {items?.map((item, index) => {
          return <GridCard key={index} props={item} />;
        })}
      </CardContainer>
    </BaseSection>
  );
};

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",

  "@bp2": {
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  },
});

const headlineStyles = css({
  color: "$fontSecondary",
  mb: "2rem",

  "@bp2": {
    mb: "6rem",
  },
})();

export type GridProps = {
  section: GridFieldsProps;
};

type GridFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    eyebrow: TextProps;
    headline: TextProps;
    body: TextProps;
    items: GridCardFieldsProps[];
  };
};
