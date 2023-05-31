import { fadeAnimation, primaryUnderlineAnimation } from "@space-ui/animations";
import { styled } from "@space-ui/config";
import { Icon, TextLink } from "@space-ui/core";
import type * as Stitches from "@stitches/react";

export const NavigationItem = ({ item }: NavigationItemProps) => {
  const { text, url, reference } = item.fields;

  return (
    <ItemList
      className={fadeAnimation({
        type: "inTop",
        time: 1000,
        mode: "mobile",
      })}
    >
      <ItemContainer className={primaryUnderlineAnimation}>
        <TextLink href={url} ariaLabel={text}>
          <>
            <Icon type={reference} />
            &nbsp;{text}
          </>
        </TextLink>
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
    transition: "color ease-in 0.3s ",

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
