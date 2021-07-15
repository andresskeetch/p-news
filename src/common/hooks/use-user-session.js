import firebase from "firebase/app";

export const useUserSession = () => {
  const auth = firebase.auth();

  return {
    hasSession: !!auth.currentUser,
    user: auth.currentUser,
  };
};
