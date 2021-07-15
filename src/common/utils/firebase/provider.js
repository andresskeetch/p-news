import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { config } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const FirebaseProvider = ({ children }) => {
  return <>{children}</>;
};

export default FirebaseProvider;
