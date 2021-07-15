import React from "react";
import { Input, Button, Title } from "common/components";
import { useForm } from "react-hook-form";
import styles from "./create-form.module.css";

const required = { required: true };
const CreateForm = ({ handleCreateGame }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleCreateGame(data.name, data.description);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Title variant="h4">Create new game</Title>
        <Input
          label="Name"
          error={errors.name && "Es requerido"}
          {...register("name", required)}
        />
        <Input label="Description" {...register("description")} />

        <Button
          type="submit"
          label="Create"
          variant="contained"
          color="primary"
        />
      </form>
    </div>
  );
};

export default CreateForm;
