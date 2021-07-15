import React from "react";
import { Input, Button, Title } from "common/components";
import { useForm } from "react-hook-form";
import styles from "./login-form.module.css";

const required = { required: true };
const LoginForm = ({ handleLogin, handleLoginGoogle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleLogin(data.email, data.password);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Title variant="h4">Login</Title>
        <Input
          label="Email"
          error={errors.email && "Es requerido"}
          {...register("email", required)}
        />
        <Input
          label="Password"
          type="password"
          error={errors.password && "Es requerido"}
          {...register("password", required)}
        />

        <Button
          type="submit"
          label="Log in"
          variant="contained"
          color="primary"
        />
        <Button
          label="Log in with Google"
          variant="outlined"
          color="primary"
          onClick={handleLoginGoogle}
        />
        <Button
          label="Register"
          variant="outlined"
          color="secondary"
          href="/register"
        />
      </form>
    </div>
  );
};

export default LoginForm;
