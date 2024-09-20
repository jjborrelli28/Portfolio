import { fadeAnimation, primaryUnderlineAnimation } from "@space-ui/animations";
import { styled } from "@space-ui/config";
import { Icon } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const NavigationItem = ({ item }: NavigationItemProps) => {
  const { text, url, reference } = item.fields;

  const isExternal = url.startsWith("/");

  return (
    <ItemList
      className={fadeAnimation({
        type: "inTop",
        time: 1000,
        mode: "mobile",
      })}
    >
      <ItemContainer className={primaryUnderlineAnimation}>
        {isExternal ? (
          <Link href={url}>
            <a aria-label={text}>
              <Icon type={reference} />
              &nbsp;{text}
            </a>
          </Link>
        ) : (
          <ScrollLink
            to={url}
            href={url}
            aria-label={text}
            smooth={true}
            duration={300}
            offset={-70}
          >
            <Icon type={reference} />
            &nbsp;{text}
          </ScrollLink>
        )}
      </ItemContainer>
    </ItemList>
  );
};

export const ItemList = styled("li", {
  p: "0",
  listStyle: "none",
  display: "flex",
  alignItems: "center",

  "&:first-child": {
    mt: "0",
  },

  "@bp2": {
    m: "0",
  },
});

const ItemContainer = styled("div", {
  display: "inline-block",

  a: {
    color: "$fontPrimary",
    textDecoration: "none",
    fontSize: "$9",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    w: "fit-content",
    transition: "color 0.3s ",
    cursor: "default",

    "&:hover": {
      color: "$fontPrimaryHover",
    },

    "@bp2": {
      fontSize: "$7",
    },
  },
});

type NavigationItemProps = {
  item: NavigationItemFieldsProps;
  className?: string;
  css?: Stitches.CSS;
};

export type NavigationItemFieldsProps = {
  fields: {
    text: string;
    url: string;
    reference: string;
  };
};
