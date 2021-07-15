import "common/styles/globals.css";
import "common/styles/variables.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FirebaseProvider from "common/utils/firebase/provider";
import AuthProvider from "common/utils/context/auth";
import theme from "common/utils/theme/theme";
import Head from "next/head";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <FirebaseProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              name="description"
              content="Planning Stories for your agile sprints with free tool and easy to use. Story points Fibonacci sequency"
            />
            <meta name="keywords" content="SCRUM, PLANNING, STORIES" />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
