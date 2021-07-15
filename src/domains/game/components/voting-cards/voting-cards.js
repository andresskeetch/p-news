import React from "react";
import styles from "./voting-cards.module.css";
import { Paper, Title } from "common/components";
import NUMBERS from "common/utils/constants/number";
import useParticipantScore from "@domains/game/hooks/use-participant-score";

const Card = ({ number, color, bgcolor, onClick, isSelected }) => {
  const selectedClass = isSelected ? "selected" : "";
  return (
    <Paper
      onClick={onClick}
      className={`${styles.card} ${styles[selectedClass]} `}
      style={{ backgroundColor: bgcolor }}
    >
      <Title variant="h2" className={styles.card__title} style={{ color }}>
        {number}
      </Title>
    </Paper>
  );
};

const VotingCards = ({ participant = {}, game }) => {
  const { handleParticipantScore } = useParticipantScore();
  return (
    <div className={styles.container}>
      {NUMBERS.map((number) => (
        <Card
          onClick={() =>
            handleParticipantScore(participant.id, number.score, game.flip)
          }
          isSelected={number.score === participant.score}
          key={number.score}
          number={number.score}
          color={number.color}
          bgcolor={number.bgcolor}
        />
      ))}
    </div>
  );
};

export default VotingCards;
