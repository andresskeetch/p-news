import { useState } from "react";
import firebase from "firebase/app";
import { useRouter } from "next/router";

const useCreateUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const routes = useRouter();

  const handleCreateUser = async (email, password, data) => {
    setLoading(true);
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({
        displayName: `${data.firstName} ${data.lastName}`,
      });
      setSuccess(true);
      routes.push("/");
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return {
    handleCreateUser,
    isLoading,
    error,
    isSuccess,
  };
};

export default useCreateUser;
