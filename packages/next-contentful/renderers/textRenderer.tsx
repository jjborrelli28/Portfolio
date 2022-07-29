import { underlineSecondaryAnimation } from "~next-contentful/animations";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useInView } from "react-intersection-observer";
import { css, styled } from "~next-contentful/config";
import clsx from "clsx";

export const textRenderer = (text?: TextProps, className = "") => {
  if (!text) {
    return null;
  }

  const contentType = text.sys.contentType.sys.id;

  const { content, customStyles, underline, typeWriterEffect } = text.fields;

  const styles = customStyles ? css(customStyles).toString() : "";

  if (typeWriterEffect) {
    const typeWriterText = content.content.map((c: any) =>
      c.content.map((c: any) => c.value).toString()
    );

    const { text } = useTypewriter({
      words: typeWriterText,
      typeSpeed: 125,
      deleteSpeed: 100,
      loop: 0,
    });

    return (
      <div
        className={clsx({
          [className]: className,
          [styles]: styles,
        })}
      >
        <span>{text}</span>
        <Cursor />
      </div>
    );
  }

  if (contentType === "heading") {
    const headingContent: any = {
      content: content.content.filter((item: any) =>
        item.nodeType.startsWith("heading")
      ),
      nodeType: "document",
    };

    const htmlText = documentToHtmlString(headingContent);

    const tag =
      headingContent.content[0]?.nodeType.charAt(0) +
      headingContent.content[0]?.nodeType.charAt(
        headingContent.content[0]?.nodeType.length - 1
      );

    const { ref, inView } = useInView({
      initialInView: true,
    });

    return (
      <HeadingContainer
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: htmlText,
        }}
        className={clsx(
          css({
            [tag]: { display: "inline !important", m: "0" },
          }).toString(),
          {
            [underlineSecondaryAnimation({ tag, time: 500, active: inView })]:
              underline,
            [className]: className,
            [styles]: styles,
          }
        )}
      />
    );
  }

  const htmlText = documentToHtmlString(content);

  return (
    <ParagraphContainer
      dangerouslySetInnerHTML={{
        __html: htmlText,
      }}
      className={clsx({
        [className]: className,
        [styles]: styles,
      })}
    />
  );
};

export const HeadingContainer = styled("div", {
  h1: {
    fontSize: "$20",

    "@bp2": {
      fontSize: "$22",
    },
  },
  h2: {
    fontSize: "$17",

    "@bp2": {
      fontSize: "$19",
    },
  },
  h3: {
    fontSize: "$14",

    "@bp2": {
      fontSize: "$16",
    },
  },
  h4: {
    fontSize: "$11",

    "@bp2": {
      fontSize: "$13",
    },
  },
  h5: {
    fontSize: "$8",

    "@bp2": {
      fontSize: "$10",
    },
  },
  h6: {
    fontSize: "$5",

    "@bp2": {
      fontSize: "$7",
    },
  },
});

export const ParagraphContainer = styled("div", {
  fontSize: "$5",
  lineHeight: "1.4rem",

  "@bp2": {
    lineHeight: "1.6rem",
    fontSize: "$7",
  },
});

export type TextProps = {
  fields: {
    content: any;
    customStyles?: string;
    underline: boolean;
    typeWriterEffect?: boolean;
  };
  sys: {
    contentType: {
      sys: {
        id: "heading" | "paragraph";
      };
    };
  };
};
