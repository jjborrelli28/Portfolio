import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useMemo } from "react";
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

export interface RichTextProps {
  content?: Document;
  style?: React.CSSProperties;
  className?: string;
  renderers?: Renderers;
  blockClass?: BlockClass;
  inlineClass?: InlineClass;
  markClass?: RenderMarkClass;
}

export const RichText = ({
  content,
  style,
  className,
  renderers = {},
  blockClass = {},
  inlineClass = {},
  markClass = {},
}: RichTextProps) => {
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
    <RichTextContainer style={style} className={className}>
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
};
