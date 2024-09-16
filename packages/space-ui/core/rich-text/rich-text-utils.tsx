import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { secondaryUnderlineAnimation } from "@space-ui/animations";
import clsx from "clsx";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Underline,
} from "./html-components";
import {
  BlockClass,
  InlineClass,
  RenderMarkClass,
  RenderMarksType,
} from "./rich-text-types";
import { css } from "@space-ui/config";

const parseContents = (contents: any) => {
  if (!contents.every((content: any) => content.type?.className === "c-FMIrA"))
    return contents;

  const parsedContents = [...contents].map((content) => {
    return content.props.children;
  });

  const { ref: underlineView, inView: underlineInView } = useInView({
    initialInView: false,
  });

  return (
    <Underline
      ref={underlineView}
      className={secondaryUnderlineAnimation({
        time: 500,
        active: underlineInView,
      })}
    >
      {parsedContents}
    </Underline>
  );
};

export const createDefaultBlockRenderers = (blockClass: BlockClass) => ({
  [BLOCKS.HEADING_1]: (_node: any, children: any) => (
    <Heading1 className={blockClass[BLOCKS.HEADING_1]}>
      {parseContents(children)}
    </Heading1>
  ),
  [BLOCKS.HEADING_2]: (_node: any, children: any) => (
    <Heading2 className={blockClass[BLOCKS.HEADING_2]}>
      {parseContents(children)}
    </Heading2>
  ),
  [BLOCKS.HEADING_3]: (_node: any, children: any) => (
    <Heading3 className={blockClass[BLOCKS.HEADING_3]}>
      {parseContents(children)}
    </Heading3>
  ),
  [BLOCKS.HEADING_4]: (_node: any, children: any) => (
    <Heading4 className={blockClass[BLOCKS.HEADING_4]}>
      {parseContents(children)}
    </Heading4>
  ),
  [BLOCKS.HEADING_5]: (_node: any, children: any) => (
    <Heading5 className={blockClass[BLOCKS.HEADING_5]}>
      {parseContents(children)}
    </Heading5>
  ),
  [BLOCKS.HEADING_6]: (_node: any, children: any) => (
    <Heading6 className={blockClass[BLOCKS.HEADING_6]}>
      {parseContents(children)}
    </Heading6>
  ),
  [BLOCKS.PARAGRAPH]: (_node: any, children: any) => {
    if (children[0] === "") return null;

    return (
      <Paragraph className={blockClass[BLOCKS.PARAGRAPH]}>
        {parseContents(children)}
      </Paragraph>
    );
  },
  [BLOCKS.OL_LIST]: (_node: any, children: any) => (
    <ol className={blockClass[BLOCKS.OL_LIST]}>{parseContents(children)}</ol>
  ),
  [BLOCKS.UL_LIST]: (_node: any, children: any) => (
    <ul className={blockClass[BLOCKS.UL_LIST]}>{parseContents(children)}</ul>
  ),
  [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
    <li className={blockClass[BLOCKS.LIST_ITEM]}>{parseContents(children)}</li>
  ),
  [BLOCKS.QUOTE]: (_node: any, children: any) => (
    <blockquote className={blockClass[BLOCKS.QUOTE]}>
      {parseContents(children)}
    </blockquote>
  ),
  [BLOCKS.HR]: () => <hr className={blockClass[BLOCKS.HR]} />,
  [BLOCKS.EMBEDDED_ENTRY]: (_node: any, children: any) => {
    const embeddedEntryName = _node.data.target.sys.contentType.sys.id;

    if (embeddedEntryName === "typeWriter") {
      const { content, customStyles } = _node.data.target.fields;

      const { text } = useTypewriter({
        words: [...content],
        typeSpeed: 125,
        deleteSpeed: 100,
        loop: 0,
      });

      return (
        <Paragraph css={customStyles}>
          <span className={css({ lineHeight: "1.1" }).toString()}>{text}</span>
          <Cursor />
        </Paragraph>
      );
    }
  },
});

export const createDefaultInlineRenderers = (inlineClass: InlineClass) => ({
  [INLINES.HYPERLINK]: (node: any, children: any) => (
    <a
      className={inlineClass[INLINES.HYPERLINK]}
      href={node.data.uri}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ),
});

export const buildRenderMarks = (
  markClass: RenderMarkClass
): RenderMarksType => ({
  [MARKS.BOLD]: (text: ReactNode) => (
    <strong className={markClass[MARKS.BOLD]}>{text}</strong>
  ),
  [MARKS.ITALIC]: (text: ReactNode) => (
    <i className={markClass[MARKS.ITALIC]}>{text}</i>
  ),
  [MARKS.UNDERLINE]: (text: ReactNode) => {
    const { ref: underlineRef, inView: underlineInView } = useInView({
      initialInView: false,
    });

    return (
      <Underline
        ref={underlineRef}
        className={clsx(
          secondaryUnderlineAnimation({
            time: 500,
            active: underlineInView,
          }),
          markClass[MARKS.UNDERLINE]
        )}
      >
        {text}
      </Underline>
    );
  },
  [MARKS.CODE]: (text: ReactNode) => (
    <span className={markClass[MARKS.CODE]}>{text}</span>
  ),
  [MARKS.SUBSCRIPT]: (text: ReactNode) => (
    <sub className={markClass[MARKS.SUBSCRIPT]}>{text}</sub>
  ),
  [MARKS.SUPERSCRIPT]: (text: ReactNode) => (
    <sup className={markClass[MARKS.SUPERSCRIPT]}>{text}</sup>
  ),
});
