import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { StoreProvider } from "../src/providers/StoreProvider";

import { client } from "../apollo-client";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
