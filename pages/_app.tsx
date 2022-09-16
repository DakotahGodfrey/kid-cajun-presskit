import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/reset.scss";
import { SiteFooter, Navbar } from "@components/.";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<
    typeof defaultTheme | typeof darkTheme
  >(darkTheme);
  const handleThemeSwitch = (theme: typeof currentTheme) => {
    setCurrentTheme(theme === defaultTheme ? darkTheme : defaultTheme);
    console.log("flipped", currentTheme);
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Navbar
        currentTheme={currentTheme}
        handleThemeSwitch={handleThemeSwitch}
      />
      <Component {...pageProps} />
      <SiteFooter />
    </ThemeProvider>
  );
}

export default MyApp;
