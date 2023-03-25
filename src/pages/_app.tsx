import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { DataProvider } from "../context/DataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </DataProvider>
  )
}
