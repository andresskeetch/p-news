import React, { useState } from "react";
import { Button, Dialog, Input } from "common/components";
import styles from "./add-story.module.css";
import useAddStory from "@domains/game/hooks/use-add-story";
import { useForm } from "react-hook-form";

const required = { required: true };

const AddStory = ({ gameId }) => {
  const [open, setOpen] = useState(false);
  const { handleCreateStory } = useAddStory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleCreateStory(data.name, gameId);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Button
        variant="outlined"
        color="primary"
        label="Add story"
        onClick={() => setOpen(true)}
      />
      <Dialog
        title="Add Story"
        description="To planing a new story add name in the input below."
        open={open}
        handleClose={() => setOpen(false)}
        actions={
          <Button
            color="primary"
            label="Add story"
            variant="outlined"
            onClick={handleSubmit(onSubmit)}
            className={styles.button}
          />
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Story name"
            error={errors.name && "Is required"}
            autoComplete={"off"}
            {...register("name", required)}
          />
        </form>
      </Dialog>
    </div>
  );
};

export default AddStory;
