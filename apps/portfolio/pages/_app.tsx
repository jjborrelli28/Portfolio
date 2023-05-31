import { ParticlesBackground } from "components/particles-background";
import { AppProps } from "next/app";
import { BaseLayout, globalStyles, ThemeProvider } from "@space-ui";
import "../styles/app.css";

function Portfolio({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider storageKey="portfolio_theme" defaultTheme="dark">
      <BaseLayout radialGradient="primary">
        <Component {...pageProps} />
      </BaseLayout>
      <ParticlesBackground />
    </ThemeProvider>
  );
}

export default Portfolio;
