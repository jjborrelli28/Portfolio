// @ts-nocheck
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { forwardRef, useMemo } from "react";
import {
  BlockClass,
  InlineClass,
  Renderers,
  RenderMarkClass,
} from "./rich-text-types";
import {
  buildRenderMarks,
  createDefaultBlockRenderers,
  createDefaultInlineRenderers,
} from "./rich-text-utils";
import { RichTextContainer } from "./rich-text-container";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";

export interface RichTextProps {
  content?: Document;
  css?: Stitches.CSS;
  className?: string;
  renderers?: Renderers;
  blockClass?: BlockClass;
  inlineClass?: InlineClass;
  markClass?: RenderMarkClass;
}

export const RichText = forwardRef(
  (
    {
      content,
      css,
      className = "",
      renderers = {},
      blockClass = {},
      inlineClass = {},
      markClass = {},
    }: RichTextProps,
    ref
  ) => {
    if (!content) return null;

    const defaultBlockRenderers = useMemo(
      () => createDefaultBlockRenderers(blockClass),
      [blockClass]
    );

    const defaultInlineRenderers = useMemo(
      () => createDefaultInlineRenderers(inlineClass),
      [inlineClass]
    );

    const defaultRenderMark = useMemo(
      () => buildRenderMarks(markClass),
      [markClass]
    );

    return (
      <RichTextContainer
        ref={ref}
        css={css}
        className={clsx({ [className]: className })}
      >
        {documentToReactComponents(content, {
          renderNode: {
            ...defaultBlockRenderers,
            ...defaultInlineRenderers,
            ...renderers,
          },
          renderMark: defaultRenderMark,
        })}
      </RichTextContainer>
    );
  }
);
