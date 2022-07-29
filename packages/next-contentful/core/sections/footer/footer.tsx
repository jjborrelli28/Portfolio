import {
  BackgroundColorBaseSectionProps,
  KNOWN_FOOTERS,
  NavigationItemFieldsProps,
} from "~next-contentful/core";
import { TextProps } from "~next-contentful/renderers";

export const Footer = ({ section }: FooterProps) => {
  const Comp = KNOWN_FOOTERS[section.fields.type];

  return <Comp {...{ section }} />;
};


