import firebase from "firebase/app";
import { useRouter } from "next/router";

export const useLogout = () => {
  const auth = firebase.auth();
  const routes = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    routes.push("/login");
  };

  return {
    handleLogout,
  };
};
