import React from "react";
import { useUserSession } from "common/hooks";
import { useRouter } from "next/router";

const SessionProvider = ({ children }) => {
  const { hasSession, user } = useUserSession();

  const routes = useRouter();
  if (!hasSession || !user) {
    localStorage.setItem("url", location.href);
    routes.push("/login");
  }

  return <>{children}</>;
};

export default SessionProvider;
