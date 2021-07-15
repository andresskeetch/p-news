import React from "react";
import { Nav, Backdrop } from "common/components";
import { StoryList, NotFoundGame, StoryDetail } from "./components";
import useGame from "@domains/game/hooks/use-game";
import styles from "./game.module.css";
import { useAddParticipantValidate } from "./hooks/use-add-participant";

const EnterGame = ({ game }) => {
  const { participant } = useAddParticipantValidate(game.id);

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <StoryList game={game} />
        <StoryDetail game={game} />
      </div>

      <Backdrop open={!participant} />
    </>
  );
};
const Game = ({ id }) => {
  const { game, exists = true } = useGame(id);

  if (!game) return <Backdrop open={!game} />;

  if (!exists) return <NotFoundGame />;

  return <EnterGame game={game} />;
};

export default Game;
