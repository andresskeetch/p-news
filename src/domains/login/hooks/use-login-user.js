import { useState } from "react";
import firebase from "firebase/app";
import { useRouter } from "next/router";

const useLoginUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const routes = useRouter();

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setSuccess(true);
      routes.push("/");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithRedirect(provider);
      setSuccess(true);
      routes.push("/");
    } catch (e) {}
    setLoading(false);
  };

  return {
    handleLogin,
    handleLoginGoogle,
    isLoading,
    isSuccess,
  };
};

export default useLoginUser;
