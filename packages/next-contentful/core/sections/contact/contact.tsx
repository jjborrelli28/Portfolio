import {
  Asset,
  BackgroundColorBaseSectionProps,
  BaseSection,
  ContactForm,
  ContainerProps,
  ImageProps,
  TextContainer,
} from "~next-contentful/core";
import { TextProps, textRenderer } from "~next-contentful/renderers";
import { fadeAnimation } from "~next-contentful/animations";
import { useInView } from "react-intersection-observer";
import { css, styled } from "~next-contentful/config";
import clsx from "clsx";

export const Contact = ({ section }: ContactProps) => {
  const {
    sectionName,
    size,
    backgroundColor,
    headline,
    asset,
    serviceId,
    templateId,
    publicKey,
  } = section.fields;

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
      <FormWithAsset>
        <ContactForm
          {...{
            serviceId,
            templateId,
            publicKey,
            className: contactFormStyles,
          }}
        />
        <AssetForm asset={asset} />
      </FormWithAsset>
    </BaseSection>
  );
};

const AssetForm = ({ asset }: AssetFormProps) => {
  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "-100px",
  });

  return (
    <Asset
      ref={ref}
      asset={asset}
      className={clsx(
        assetStyles,
        fadeAnimation({
          type: `${inView ? "inRight" : "out"}`,
          time: 1000,
        })
      )}
      layout="responsive"
      placeholder="blur"
      sizes="50vw"
      loading="lazy"
    />
  );
};

type AssetFormProps = {
  asset: ImageProps;
};

const headlineStyles = css({
  color: "$fontSecondary",
  mb: "3rem",

  "@bp2": {
    mb: "3rem",
  },
})();

const contactFormStyles = css({
  mb: "3rem",
  "@bp2": { mb: "0", pb: "3rem", justifyContent: "center" },
}).toString();

const assetStyles = css({ maxw: "500px" }).toString();

export const FormWithAsset = styled("div", {
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
    headline: TextProps;
    asset: ImageProps;
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
};
