import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContainerProps,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import { useInView } from "react-intersection-observer";

export const HeroResume = ({ section }: HeroResumeProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    content,
    presentation,
    workExperience,
    education,
    technicalSkills,
    languages,
    customContentStyles,
    asset,
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
        minh: "100vh",
        pt: "$headerMobile",

        "@bp2": {
          pt: "134px",
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
      {/* <Asset
        asset={asset}
        priority
        layout="fill"
        objectFit="contain"
        assetClassName={fadeAnimation({
          type: inView ? "inRight" : "out",
          time: 1000,
        })}
        css={{ maxw: "500px" }}
      /> */}
    </BaseSection>
  );
};

export type HeroResumeProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      content: Document;
      presentation: Document;
      workExperience: Document;
      education: Document;
      technicalSkills: Document;
      languages: Document;
      customContentStyles: Stitches.CSS;
      asset: ImageProps;
    };
  };
};
