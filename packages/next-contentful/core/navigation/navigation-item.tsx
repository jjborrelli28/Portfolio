import { Icon, TextLink } from "~next-contentful/core";
import { styled } from "~next-contentful/config";
import {
  fadeAnimation,
  underlinePrimaryAnimation,
} from "~next-contentful/animations";

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
      <ItemContainer className={underlinePrimaryAnimation}>
        <TextLink href={url} ariaLabel={text}>
          <Icon type={reference} />
          &nbsp;{text}
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
};

export type NavigationItemFieldsProps = {
  fields: {
    text: string;
    url: string;
    reference: string;
  };
};
