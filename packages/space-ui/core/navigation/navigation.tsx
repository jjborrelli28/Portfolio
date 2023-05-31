import {
  NavigationContainer,
  NavigationItem,
  NavigationItemFieldsProps,
  NavigationMenu,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";

export const Navigation = ({ navigation, className, css }: NavigationProps) => {
  if (!navigation) return null;

  return (
    <NavigationContainer className={className} css={css}>
      <NavigationMenu>
        {navigation?.map((item) => {
          const { reference } = item.fields;

          return <NavigationItem item={item} key={reference} />;
        })}
      </NavigationMenu>
    </NavigationContainer>
  );
};

export type NavigationProps = {
  navigation?: NavigationItemFieldsProps[];
  className?: string;
  css?: Stitches.CSS;
};
