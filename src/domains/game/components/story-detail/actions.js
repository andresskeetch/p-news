import React from "react";
import styles from "./actions.module.css";
import { Button } from "common/components";

const Actions = ({ handleResetAllParticipantScore, handleFlipCards, game }) => {
  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={handleResetAllParticipantScore}
        label="Reset cards"
      />
      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        onClick={handleFlipCards}
        label="Flip cards"
        disabled={game.flip}
      />
    </div>
  );
};

export default Actions;
