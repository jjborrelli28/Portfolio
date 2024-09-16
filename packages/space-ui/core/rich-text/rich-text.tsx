import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ForwardedRef, forwardRef, useMemo } from "react";
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
import { useInView } from "react-intersection-observer";

export interface RichTextProps {
  content?: Document;
  className?: string;
  css?: Stitches.CSS;
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
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    if (!content) return null;

    const { ref: underlineRef, inView: underlineInView } = useInView({
      initialInView: false,
    });

    const defaultBlockRenderers = useMemo(
      () =>
        createDefaultBlockRenderers(blockClass, underlineRef, underlineInView),
      [blockClass]
    );

    const defaultInlineRenderers = useMemo(
      () => createDefaultInlineRenderers(inlineClass),
      [inlineClass]
    );

    const defaultRenderMark = useMemo(
      () => buildRenderMarks(markClass, underlineRef, underlineInView),
      [markClass]
    );

    return (
      <RichTextContainer ref={ref} className={className} css={css}>
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
