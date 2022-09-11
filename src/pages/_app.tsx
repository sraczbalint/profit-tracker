import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useRouter } from "next/router";

import { AuthContextProvider } from "context/AuthContext";
import ProtectedRoute from "context/protectedRoute";

import { theme } from "theme";
import { createEmotionCache } from "utils/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();

const App = (props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: any) => page);

  const noAuthRequired = ["/login", "/register"];

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Material Kit Pro</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(
            noAuthRequired.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )
          )}
        </ThemeProvider>
      </CacheProvider>
    </AuthContextProvider>
  );
};

export default App;
