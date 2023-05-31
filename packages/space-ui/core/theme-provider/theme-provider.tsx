import { darkThemeClass } from "@space-ui/config";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextThemes,
} from "next-themes";
import { PropsWithChildren } from "react";

export const useTheme = () => useNextThemes();

export const ThemeProvider = ({
  children,
  storageKey = "theme",
  defaultTheme = "light",
}: PropsWithChildren<ThemeProviderProps>) => {
  return (
    <NextThemesProvider
      attribute="class"
      storageKey={storageKey}
      defaultTheme={defaultTheme}
      enableSystem={false}
      value={{
        dark: darkThemeClass,
      }}
    >
      {children}
    </NextThemesProvider>
  );
};

export type ThemeProps = "light" | "dark" | undefined;

type ThemeProviderProps = {
  storageKey: string;
  defaultTheme?: ThemeProps;
};
