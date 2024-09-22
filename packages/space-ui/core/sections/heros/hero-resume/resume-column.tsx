import { Document } from "@contentful/rich-text-types";
import { css as styles, styled } from "@space-ui/config";
import { EntryInlineContainer } from "@space-ui/core/card/card";
import { Paragraph } from "@space-ui/core/rich-text/html-components";
import { RichText } from "@space-ui/core/rich-text/rich-text";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { Fragment } from "react";

export const ResumeColumn = ({
  content,
  css,
  className,
}: {
  content: Document;
  css?: Stitches.CSS;
  className?: string;
}) => {
  return (
    <ResumeColumnContainer css={css} className={className}>
      <RichText
        content={content}
        activeUnderlines
        css={{
          color: "#000 !important",
          whiteSpace: "pre-wrap",
          gap: "3.75mm",
        }}
        blockClass={{
          "heading-3": clsx(
            styles({
              fontSize: "$7 !important",
              my: "1.875mm !important",
              lineHeight: "initial !important",
            }).toString()
          ),
          paragraph: styles({
            fontWeight: "$4",
            fontSize: "$3 !important",
            my: "0 !important",
            lineHeight: "1.25 !important",
          }).toString(),
          "unordered-list": styles({
            my: "0",
            pl: "0",
            display: "flex",
            flexDirection: "column",
            gap: "1.875mm",
            listStyle: "none",
          }).toString(),
          "list-item": styles({
            position: "relative",

            "&::before": {
              content: '""',
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              bt: "1mm solid transparent",
              bb: "1mm solid transparent",
              bl: "2mm solid $line",
            },

            "& p": {
              fontWeight: "$5",
              fontSize: "$4",
              my: "0 !important",
            },
          }).toString(),
        }}
        markClass={{
          bold: styles({ color: "$fontSecondary" }).toString(),
        }}
        renderers={{
          "heading-5": (_, children) => (
            <p
              className={styles({
                fontWeight: "$5",
                fontSize: "$3 !important",
                mb: "0 !important",
                pl: "5mm !important",
                mt: "-2.75mm !important",
              }).toString()}
            >
              {children}
            </p>
          ),
          "heading-6": (_, children) => (
            <p
              className={styles({
                fontWeight: "$5",
                fontSize: "$3 !important",
                mb: "0 !important",
                pl: "5mm !important",
                mt: "-5mm !important",
              }).toString()}
            >
              {children}
            </p>
          ),
          paragraph: (_node, children) => {
            const hasEmbeddedEntryInline = _node.content.some(
              (c) => c.nodeType === "embedded-entry-inline"
            );

            if (hasEmbeddedEntryInline) {
              const embbedEntries = _node.content.filter(
                (c) => c.nodeType === "embedded-entry-inline"
              );

              return (
                <EntryInlineContainer
                  css={{
                    gap: "3.75mm !important",
                    alignItems: "center",
                    pl: "5mm",
                  }}
                >
                  {embbedEntries.map((entry, index) => {
                    const entryType = entry.data.target.sys.contentType.sys.id;

                    if (entryType === "image") {
                      const firstChildIsText =
                        Array.isArray(children) &&
                        typeof children[0] === "string" &&
                        children[0] !== "";

                      return (
                        <Fragment key={index}>
                          {!firstChildIsText && (
                            <img
                              src={
                                entry.data.target.fields.light.fields.file.url
                              }
                              className={styles({
                                my: "0.9375mm",
                                w: "7.5mm",
                              }).toString()}
                            />
                          )}

                          {Array.isArray(children) &&
                            children.some(
                              (child) =>
                                typeof child === "string" && child !== ""
                            ) && (
                              <span
                                className={styles({
                                  fontWeight: "$5",
                                  fontSize: "$4",
                                  whiteSpace: "pre-wrap",
                                }).toString()}
                              >
                                {children.find(
                                  (child) =>
                                    typeof child === "string" && child !== ""
                                )}
                              </span>
                            )}

                          {firstChildIsText && (
                            <img
                              src={
                                entry.data.target.fields.light.fields.file.url
                              }
                              className={styles({
                                my: "0.9375mm",
                                w: "7.5mm",
                              }).toString()}
                            />
                          )}
                        </Fragment>
                      );
                    }
                  })}
                </EntryInlineContainer>
              );
            }

            return (
              <Paragraph
                className={styles({
                  position: "relative",
                  fontSize: "$3 !important",
                  mb: "0 !important",
                  pl: "5mm",
                  mt: "-2.5mm !important",
                  lineHeight: "1.25 !important",
                }).toString()}
              >
                {children}
              </Paragraph>
            );
          },
        }}
      />
    </ResumeColumnContainer>
  );
};

const ResumeColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  h: "fit-content",
});
