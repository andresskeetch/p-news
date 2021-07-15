import "common/styles/globals.css";
import "common/styles/variables.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FirebaseProvider from "common/utils/firebase/provider";
import AuthProvider from "common/utils/context/auth";
import theme from "common/utils/theme/theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <FirebaseProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
