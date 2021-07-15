import React from "react";
import styles from "./participants.module.css";
import { Paper, Title } from "common/components";
import NUMBERS from "common/utils/constants/number";

const Participants = ({ participants, game }) => {
  return (
    <div className={styles.container}>
      {participants.map((participant) => {
        const numberSelected =
          NUMBERS.find((n) => n.score === participant.score) || {};

        const hasScore = participant.score !== "-" ? "score" : "";
        return game.flip ? (
          <Paper
            className={styles.card}
            key={participants.userName}
            style={{ backgroundColor: numberSelected.bgcolor }}
          >
            <Title style={{ color: numberSelected.color }} variant="h3">
              {participant.score}
            </Title>
            <p style={{ color: numberSelected.color }} className={styles.title}>
              {participant.userName}
            </p>
          </Paper>
        ) : (
          <Paper
            className={`${styles.card} ${styles[hasScore]}`}
            key={participants.userName}
          >
            <Title variant="h3">-</Title>
            <p className={styles.title}>{participant.userName}</p>
          </Paper>
        );
      })}
    </div>
  );
};

export default Participants;
