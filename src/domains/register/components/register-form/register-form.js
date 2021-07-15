import React from "react";
import { Input, Button, Title } from "common/components";
import { useForm } from "react-hook-form";
import styles from "./register-form.module.css";

const required = { required: true };
const RegisterForm = ({ handleCreateUser, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleCreateUser(data);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Title variant="h4">Register Account</Title>
        <Input
          label="Name"
          error={errors.firstName && "Is required"}
          {...register("firstName", required)}
        />
        <Input
          label="Last name"
          error={errors.lastName && "Is required"}
          {...register("lastName", required)}
        />
        <Input
          label="Email"
          error={errors.email && "Is required"}
          {...register("email", required)}
        />
        <Input
          label="Password"
          error={errors.password && "Is required and min 6 characters"}
          type="password"
          {...register("password", { ...required, min: 6 })}
        />

        <Button
          type="submit"
          label="Registar"
          variant="contained"
          color="primary"
        />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
