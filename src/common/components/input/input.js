import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./input.module.css";

export default function Input({ id, value, label, error, ...rest }) {
  return (
    <TextField
      className={styles.input}
      error={!!error}
      helperText={error}
      id={id}
      value={value}
      label={label}
      {...rest}
    />
  );
}
