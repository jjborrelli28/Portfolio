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
} from "~next-contentful/core";

export const Header = ({ header }: HeaderProps) => {
  const { navigation, size = "lg" } = header.fields;

  const { status, setStatus } = useHeaderContext();

  const toggleStatus = () =>
    setStatus((previous: InitialStateProps) =>
      previous.status === "opened" ? { status: "closed" } : { status: "opened" }
    );

  return (
    <HeaderContainer {...{ status, size }}>
      <HeaderMenu>
        <Hamburger {...{ status, toggleStatus }} />
        <HeaderMenuContent status={status}>
          <Navigation navigation={navigation} />
          <ThemeToggle />
        </HeaderMenuContent>
      </HeaderMenu>
    </HeaderContainer>
  );
};

type HeaderProps = {
  header: HeaderFieldsProps;
};

export type HeaderFieldsProps = {
  fields: {
    navigation: NavigationItemFieldsProps[];
    size?: ContainerProps;
  };
};
