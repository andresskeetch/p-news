import React from "react";
import styles from "./score.module.css";
import { Paper, Title } from "common/components";

const Score = ({ score = "-" }) => {
  return (
    <Paper className={styles.container}>
      <Title variant="h1" color="primary">
        {score}
      </Title>
    </Paper>
  );
};

export default Score;
