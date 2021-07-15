import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./backdrop.module.css";

export default function SimpleBackdrop({ handleClose, open }) {
  return (
    <Backdrop className={styles.backdrop} open={open} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
