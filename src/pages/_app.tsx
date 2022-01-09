import { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import "../styles/global.scss"
function MyApp({ Component, pageProps }: AppProps) {
  const [darckMode, setDarkMode] = useState(true);

  function handleLayoutChangeMode() {
    setDarkMode(!darckMode)
  }

  return (
    <>
      <Header
        layoutType={darckMode}
        changeLayput={handleLayoutChangeMode}
        />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
