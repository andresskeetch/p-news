import React from "react";
import { useUserSession } from "common/hooks";
import { useRouter } from "next/router";

const SessionProvider = ({ children }) => {
  const { hasSession } = useUserSession();

  const routes = useRouter();
  if (!hasSession) {
    routes.push("/login");
  }

  return <>{children}</>;
};

export default SessionProvider;
