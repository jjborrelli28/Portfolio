import { AppProps } from "next/app";
import { BaseLayout, globalStyles, ThemeProvider } from "@next-contentful/ui";
import { ParticlesBackground } from "components/particles-background/particles-background";
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
