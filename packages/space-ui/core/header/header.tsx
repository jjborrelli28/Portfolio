import { css as styles } from "@space-ui/config";
import {
  Asset,
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
import { Link as ScrollLink } from "react-scroll";

export const Header = ({ header, className, css }: HeaderProps) => {
  if (!header) return null;

  const { size = "lg", logo, navigation, languageFlags } = header.fields;

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
      {logo ? (
        <ScrollLink
          to={logo.fields.link as string}
          smooth={true}
          duration={300}
        >
          <Asset
            alt="Logo"
            asset={logo}
            className={styles({
              width: "2rem !important",
              mx: "0 !important",
              position: "absolute !important",
              top: "$5",
              right: "$5",

              "@bp2": {
                position: "relative !important",
                top: "auto",
                right: "auto",
                display: "flex",
                alignItems: "center",
              },
            }).toString()}
          />
        </ScrollLink>
      ) : null}
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
    logo: ImageProps;
    navigation: NavigationItemFieldsProps[];
    languageFlags?: ImageProps[];
  };
};
