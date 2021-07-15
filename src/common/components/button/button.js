import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./button.module.css";

export default function ButtonCustom({ label, ...rest }) {
  return (
    <Button className={styles.button} {...rest}>
      {label}
    </Button>
  );
}
