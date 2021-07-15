import React from "react";
import styles from "./actions.module.css";
import { Button } from "common/components";
import ShareGame from "../share-game/share-game";

const Actions = ({
  handleResetAllParticipantScore,
  handleFlipCards,
  game,
  handleResetScore,
}) => {
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
      <Button
        variant="outlined"
        color="primary"
        className={styles.button}
        onClick={handleResetScore}
        label="Reset Score"
      />
      <ShareGame gameId={game.id} />
    </div>
  );
};

export default Actions;
