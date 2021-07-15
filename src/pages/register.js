import React, { useEffect } from "react";
import Module from "domains/register/register";
import { useUserSession } from "common/hooks";
import { useRouter } from "next/router";

const Register = () => {
  const { hasSession } = useUserSession();
  const routes = useRouter();

  useEffect(() => {
    if (hasSession) {
      routes.push("/");
    }
  });

  return <Module />;
};

export default Register;
