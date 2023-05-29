import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContactForm,
  ContainerProps,
  ImageProps,
} from "~next-contentful/core";
import { fadeAnimation } from "~next-contentful/animations";
import { useInView } from "react-intersection-observer";
import { css, styled } from "~next-contentful/config";
import clsx from "clsx";
import { RichText } from "~next-contentful/core/rich-text/rich-text";
import { Document } from "@contentful/rich-text-types";
import type * as Stitches from "@stitches/react";

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
        css={
          customContentStyles || {
            color: "$fontSecondary",
          }
        }
        className={fadeAnimation({
          type: headlineInView ? "inLeft" : "out",
          time: 1000,
        })}
      />
      <FormGrid>
        <ContactForm
          serviceId={serviceId}
          templateId={templateId}
          publicKey={publicKey}
          className={css({
            mb: "3rem",
            "@bp2": { mb: "0", pb: "3rem", justifyContent: "center" },
          })()}
        />
        <Asset
          ref={headlineRef}
          asset={asset}
          className={clsx(
            css({ maxw: "500px" })(),
            fadeAnimation({
              type: `${headlineInView ? "inRight" : "out"}`,
              time: 1000,
            })
          )}
          layout="responsive"
          placeholder="blur"
          sizes="50vw"
          loading="lazy"
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
  section: ContactFieldsProps;
};

type ContactFieldsProps = {
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
