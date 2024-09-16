import {
  ContainerProps,
  Hamburger,
  HeaderContainer,
  HeaderMenu,
  HeaderMenuContent,
  ImageProps,
  InitialStateProps,
  Navigation,
  NavigationItemFieldsProps,
  ThemeToggle,
  useHeaderContext,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import { LanguageSwitcher } from "../language-switcher";

export const Header = ({ header, className, css }: HeaderProps) => {
  if (!header) return null;

  const { size = "lg", navigation, languageFlags } = header.fields;

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
          <LanguageSwitcher languageFlags={languageFlags} />
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
    size?: ContainerProps;
    navigation: NavigationItemFieldsProps[];
    languageFlags?: ImageProps[];
  };
};
