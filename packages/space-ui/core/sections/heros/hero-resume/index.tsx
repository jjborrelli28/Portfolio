import { Document } from "@contentful/rich-text-types";
import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import {
  BackgroundColorBaseSectionProps,
  BaseSection,
  Button,
  ContainerProps,
  ImageProps,
  RichText,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { ResumeColumn } from "./resume-column";
import { ContactFooter } from "./contact-footer";

export const HeroResume = ({ section }: HeroResumeProps) => {
  const { ref, inView } = useInView({
    initialInView: true,
  });
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const { locale } = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownloadResume = useCallback(() => {
    const resume = resumeRef.current;

    if (!resume) return;

    // html2pdf()
    //   .from(resume)
    //   .set({
    //     filename: locale?.startsWith("es")
    //       ? "juanjoseborrelli-cv.pdf"
    //       : "juanjoseborrelli-resume.pdf",
    //     image: { type: "png", quality: 0.98 },
    //     html2canvas: { scale: 2, useCORS: true },
    //   })
    //   .save();
  }, [resumeRef]);

  if (!isMounted) return null;

  const {
    sectionName,
    size,
    backgroundColor,
    content,
    asset,
    presentation,
    firstColumn,
    secondColumn,
    customContentStyles,
  } = section.fields;

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
      <ResumeContainer>
        <Resume ref={resumeRef}>
          <ResumeContent>
            <RichText
              content={presentation}
              activeUnderlines
              className={css({
                color: "#000 !important",
                whiteSpace: "pre-wrap",
                gap: "7.5mm",
              }).toString()}
              blockClass={{
                "heading-2": clsx(
                  css({
                    fontSize: "$16 !important",
                    mb: "0 !important",
                    lineHeight: "initial !important",
                  }).toString()
                ),
                paragraph: css({
                  fontWeight: "$4",
                  fontSize: "$3 !important",
                  my: "0 !important",
                  lineHeight: "1.25 !important",
                }).toString(),
              }}
              markClass={{ bold: css({ color: "$fontSecondary" }).toString() }}
              renderers={{
                "heading-6": (_, children) => (
                  <p
                    className={css({
                      fontWeight: "$5",
                      fontSize: "$4 !important",
                      my: "0 !important",
                    }).toString()}
                  >
                    {children}
                  </p>
                ),
              }}
            />
            <ResumeColumns>
              <ResumeColumn content={firstColumn} />
              <ResumeColumn
                content={secondColumn}
                css={{
                  bl: "solid $fontSecondary 1mm",
                  pl: "7.5mm",
                  pb: "7.5mm",
                }}
              />
              <ContactFooter />
            </ResumeColumns>
          </ResumeContent>
        </Resume>

        <Button size="lg" onClick={handleDownloadResume}>
          {locale?.startsWith("es") ? "Descargar" : "Dorwnload"}&nbsp;
          <FaFileDownload />
        </Button>
      </ResumeContainer>
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
      asset: ImageProps;
      presentation: Document;
      firstColumn: Document;
      secondColumn: Document;
      customContentStyles: Stitches.CSS;
    };
  };
};

const ResumeContainer = styled("div", {
  maxw: "210mm",
  display: "flex",
  flexDirection: "column",
  gap: "7.5mm",
  mt: "$11",
  mx: "auto",
  alignItems: "end",
});

const Resume = styled("div", {
  h: "297mm",
  maxw: "210mm",
  backgroundColor: "#fff",
  display: "flex",
  p: "7.5mm",
  filter: "drop-shadow(0 20px 20px rgba(81, 29, 37, .5))",
});

const ResumeContent = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "7.5mm",
  b: "solid $fontSecondary 1mm",
  p: "7.5mm",
});

const ResumeColumns = styled("div", {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
  g: "15mm",
});
