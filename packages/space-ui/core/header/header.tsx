import {
  HeaderContainer,
  ContainerProps,
  Hamburger,
  HeaderMenu,
  HeaderMenuContent,
  InitialStateProps,
  Navigation,
  NavigationItemFieldsProps,
  ThemeToggle,
  useHeaderContext,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";

export const Header = ({ header, className, css }: HeaderProps) => {
  if (!header) return null;

  const { navigation, size = "lg" } = header.fields;

  const { status, setStatus } = useHeaderContext();

  const toggleStatus = () =>
    setStatus((previous: InitialStateProps) =>
      previous.status === "opened" ? { status: "closed" } : { status: "opened" }
    );

  return (
    <HeaderContainer
      status={status}
      size={size}
      className={className}
      css={css}
    >
      <HeaderMenu>
        <Hamburger status={status} toggleStatus={toggleStatus} />
        <HeaderMenuContent status={status}>
          <Navigation navigation={navigation} />
          <ThemeToggle />
        </HeaderMenuContent>
      </HeaderMenu>
    </HeaderContainer>
  );
};

type HeaderProps = {
  header?: HeaderFieldsProps;
  className?: string;
  css?: Stitches.CSS;
};

export type HeaderFieldsProps = {
  fields: {
    navigation: NavigationItemFieldsProps[];
    size?: ContainerProps;
  };
};
