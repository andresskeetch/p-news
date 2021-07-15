import React from "react";
import { Nav, Backdrop, Paper } from "common/components";
import { RegisterForm } from "./components";
import useCreateUser from "./hooks/use-create-user";
import styles from "./register.module.css";

const Register = () => {
  const { handleCreateUser, isLoading, error } = useCreateUser();

  const handleCreate = ({ email, password, ...data }) => {
    handleCreateUser(email, password, data);
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <RegisterForm handleCreateUser={handleCreate} error={error} />
        </Paper>
      </div>
      <Backdrop open={isLoading} />
    </>
  );
};

export default Register;
