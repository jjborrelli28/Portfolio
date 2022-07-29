import { Icon, useTheme } from "~next-contentful/core";
import { fadeAnimation } from "~next-contentful/animations";
import { styled } from "~next-contentful/config";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ButtonContainer>
      {isMounted && (
        <BaseButton
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={clsx(
            fadeAnimation({
              type: "inTop",
              time: 1000,
              mode: "mobile",
            }),
            { [className]: className }
          )}
        >
          <Icon type={theme} />
        </BaseButton>
      )}
    </ButtonContainer>
  );
};

const BaseButton = styled("button", {
  backgroundColor: "transparent",
  b: "none",
  color: "$fontPrimary",
  fontSize: "$9",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  p: "0",

  "&:hover": {
    color: "$fontPrimaryHover",
    cursor: "pointer",
  },

  "@bp2": {
    fontSize: "$8",
    justifyContent: "center",
  },
});

const ButtonContainer = styled("div", {
  h: "24px",
  w: "24px",
});

type ThemeToggleProps = {
  className?: string;
};
