import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  Container,
  ContainerProps,
  ImageProps,
  Pictures,
  TextContainer,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { fadeAnimation } from "~next-contentful/animations";
import { css, styled } from "~next-contentful/config";
import { useInView } from "react-intersection-observer";

export const SliderPrimary = ({ section }: SliderPrimaryProps) => {
  const { sectionName, size, backgroundColor, headline, pictures } =
    section.fields;

  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <BaseSection {...{ size: "n", backgroundColor, ref }} id={sectionName}>
      <Container size={size} css={{ px: "2rem" }}>
        {headline && (
          <TextContainer
            className={fadeAnimation({
              type: inView ? "inLeft" : "out",
              time: 1000,
            })}
          >
            {textRenderer(headline, headlineStyles)}
          </TextContainer>
        )}
      </Container>
      <SliderContainer>
        <Pictures {...{ pictures, sliderType: "primary", inView }} />
        <Pictures {...{ pictures, sliderType: "secondary", inView }} />
      </SliderContainer>
    </BaseSection>
  );
};

const headlineStyles = css({
  color: "$fontSecondary",
  mb: "2rem",

  "@bp2": {
    mb: "6rem",
  },
})();

const SliderContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  my: "2rem",
  h: "80px",

  "@bp2": { h: "130px" },
});

export type SliderPrimaryProps = {
  section: SliderPrimaryFieldsProps;
};

type SliderPrimaryFieldsProps = {
  fields: {
    sectionName: string;
    size: ContainerProps;
    backgroundColor: BackgroundColorBaseSectionProps;
    headline: TextProps;
    subheadline: TextProps;
    body: TextProps;
    pictures: ImageProps[];
  };
};
