import React, { useEffect } from "react";
import Module from "domains/login/login";
import { useUserSession } from "common/hooks";
import { useRouter } from "next/router";

const Login = () => {
  const { hasSession } = useUserSession();
  const routes = useRouter();

  useEffect(() => {
    if (hasSession) {
      routes.push("/");
    }
  });

  return <Module />;
};

export default Login;
