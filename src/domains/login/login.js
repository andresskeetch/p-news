import React from "react";
import { Nav, Backdrop, Paper } from "common/components";
import { LoginForm } from "./components";
import useLogin from "./hooks/use-login-user";
import styles from "./login.module.css";

const Login = () => {
  const { handleLogin, isLoading, handleLoginGoogle } = useLogin();

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <LoginForm
            handleLogin={handleLogin}
            handleLoginGoogle={handleLoginGoogle}
          />
        </Paper>
      </div>

      <Backdrop open={isLoading} />
    </>
  );
};

export default Login;
