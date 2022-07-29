import {
  NavigationContainer,
  NavigationItem,
  NavigationItemFieldsProps,
  NavigationMenu,
} from "~next-contentful/core";

export const Navigation = ({ navigation }: NavigationProps) => {
  return (
    <NavigationContainer>
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
  navigation: NavigationItemFieldsProps[];
};
