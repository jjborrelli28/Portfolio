import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContactForm,
  ContainerProps,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export const Contact = ({ section }: ContactProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    content,
    customContentStyles,
    asset,
    serviceId,
    templateId,
    publicKey,
  } = section.fields;

  const { ref: headlineRef, inView: headlineInView } = useInView();

  return (
    <BaseSection
      id={sectionName}
      ref={headlineRef}
      size={size}
      backgroundColor={backgroundColor}
    >
      <RichText
        content={content}
        className={clsx(
          css({ color: "$fontSecondary" }).toString(),
          fadeAnimation({
            type: headlineInView ? "inLeft" : "out",
            time: 1000,
          })
        )}
        css={customContentStyles}
      />
      <FormGrid>
        <ContactForm
          serviceId={serviceId}
          templateId={templateId}
          publicKey={publicKey}
          css={{
            mb: "3rem",
            "@bp2": { mb: "0", pb: "3rem", justifyContent: "center" },
          }}
        />
        <Asset
          ref={headlineRef}
          asset={asset}
          layout="responsive"
          sizes="50vw"
          loading="lazy"
          className={fadeAnimation({
            type: `${headlineInView ? "inRight" : "out"}`,
            time: 1000,
          })}
          css={{ maxw: "500px" }}
        />
      </FormGrid>
    </BaseSection>
  );
};

export const FormGrid = styled("div", {
  position: "relative",
  display: "grid",

  "@bp2": {
    gridTemplateRows: "1fr",
    gridTemplateColumns: "3fr 2fr",
    gap: "4rem",
  },
});

export type ContactProps = {
  section: {
    fields: {
      sectionName: string;
      size: ContainerProps;
      backgroundColor: BackgroundColorBaseSectionProps;
      content: Document;
      customContentStyles: Stitches.CSS;
      asset: ImageProps;
      serviceId: string;
      templateId: string;
      publicKey: string;
    };
  };
};
