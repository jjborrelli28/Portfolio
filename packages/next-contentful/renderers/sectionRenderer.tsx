import {
  ContactProps,
  FooterProps,
  GridProps,
  HeroProps,
  KNOWN_SECTIONS,
  SliderProps,
  SpotlightProps,
  SpotlightsProps,
} from "~next-contentful/core";

export const sectionRenderer = (section: SectionProps, index: number) => {
  const Comp = KNOWN_SECTIONS[section.sys.contentType?.sys.id];

  if (!Comp) {
    return null;
  }

  return <Comp section={section} key={index} />;
};

export type SectionProps = (
  | ContactProps
  | FooterProps
  | GridProps
  | HeroProps
  | SliderProps
  | SpotlightProps
  | SpotlightsProps
) & {
  sys: { contentType: { sys: { id: TypeSectionProps } } };
};

type TypeSectionProps =
  | "contact"
  | "footer"
  | "grid"
  | "heroPrimary"
  | "sliderPrimary"
  | "spotlight"
  | "spotlights";
