import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { GlobalStyle } from "../styles/global";
import { PaletteMode } from "@mui/material";
import React from "react";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {

      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: { // works
            main: '#eee',
          },
        }
        : {
          // palette values for dark mode
          primary: grey,
          divider: grey[900],
        }),
    }
  });
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          layoutType={mode === 'dark'}
          changeLayput={colorMode.toggleColorMode}
        />
        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
