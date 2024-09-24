import { fadeAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import { Asset, ImageProps } from "@space-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

type Locales = "es-AR" | "en-US";

export const parseLocale = (locale?: string) => {
  if (locale?.startsWith("es")) return "es-AR";

  return "en-US";
};

export const LanguageSwitcher = ({
  languageFlags,
}: {
  languageFlags?: ImageProps[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const locale = parseLocale(router?.locale);

  const languageFlag = languageFlags?.find(
    (languageFlag) => languageFlag.fields.title === locale
  );

  if (!languageFlags || !languageFlag) return null;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (newLocale: Locales) => {
    if (newLocale === locale) return null;

    router.push(router.asPath, router.asPath, {
      locale: newLocale.split("-")[0],
    });
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <FlagButton
        onClick={toggleDropdown}
        className={fadeAnimation({
          type: "inTop",
          time: 1000,
          mode: "mobile",
        })}
        css={{
          transition: "filter 0.3s",

          "&:hover": {
            filter: "brightness(1.15)",
          },
        }}
      >
        <Asset
          asset={languageFlag}
          className={css({
            width: "30px !important",
            display: "flex",
          }).toString()}
        />
      </FlagButton>
      <DropdownMenuContainer>
        <DropdownMenu open={isOpen}>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "1fr",
              gridTemplateRows: "repeat(2, 1fr)",
            }).toString()}
          >
            {languageFlags.map((languageFlag, i) => (
              <DropdownItem
                key={i}
                onClick={() =>
                  handleSelect(
                    languageFlag.fields.light.fields.title as Locales
                  )
                }
              >
                <Asset
                  asset={languageFlag}
                  className={css({ width: "30px !important" }).toString()}
                />
                <p className={css({ m: "0" }).toString()}>
                  {languageFlag.fields.light.fields.description}
                </p>
              </DropdownItem>
            ))}
          </div>
        </DropdownMenu>
      </DropdownMenuContainer>
    </DropdownContainer>
  );
};

const DropdownContainer = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
});

const FlagButton = styled("button", {
  width: "30px",
  backgroundColor: "transparent",
  p: "0",
  border: "none",

  "&:focus": {
    outline: "none",
  },
});

const DropdownMenuContainer = styled("div", {
  overflow: "hidden",
});

const DropdownMenu = styled("div", {
  position: "absolute",
  top: "40px",
  left: "0",
  display: "grid",
  backgroundColor: "$bgPrimary",
  transition: "grid-template-rows 0.3s, opacity 0.3s",
  borderTop: "$line 2px solid",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  zIndex: 5,

  "@bp2": {
    right: "0",
    left: "initial",
  },

  variants: {
    open: {
      true: {
        gridTemplateRows: "1fr",
        opacity: 1,
      },
      false: {
        gridTemplateRows: "0fr",
        opacity: 0,
      },
    },
  },
});

const DropdownItem = styled("button", {
  width: "100%",
  display: "grid",
  gridTemplateRows: "auto",
  gridAutoFlow: "column",
  gridAutoColumns: "max-content",
  alignItems: "center",
  gap: "7.5px",
  backgroundColor: "transparent",
  p: "10px 7.5px",
  border: "none",
});
