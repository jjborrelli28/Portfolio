import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  Spotlight,
  SportlightFieldsProps,
  TextContainer,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { fadeAnimation } from "~next-contentful/animations";
import { useInView } from "react-intersection-observer";

export const Spotlights = ({ section }: SpotlightsProps) => {
  const { sectionName, size, backgroundColor, headline, spotlights } =
    section.fields;

  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <BaseSection {...{ size, backgroundColor }} id={sectionName}>
      {headline && (
        <TextContainer
          ref={ref}
          css={{
            color: "$fontSecondary",
            mb: "2rem",

            "@bp2": {
              mb: "4rem",
            },
          }}
          className={fadeAnimation({
            type: inView ? "inLeft" : "out",
            time: 1000,
          })}
        >
          {textRenderer(headline)}
        </TextContainer>
      )}
      {spotlights?.map((spotlight, index) => (
        <Spotlight key={index} section={spotlight} />
      ))}
    </BaseSection>
  );
};

export type SpotlightsProps = {
  section: {
    fields: {
      sectionName: string;
      size?: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      headline: TextProps;
      spotlights: SportlightFieldsProps[];
    };
  };
};
