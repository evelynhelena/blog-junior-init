import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { grey} from '@mui/material/colors';
import "../styles/global.scss"
import { PaletteMode } from "@mui/material";
import React from "react";
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
    },
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
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          layoutType={mode === 'dark'}
          changeLayput={colorMode.toggleColorMode}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
