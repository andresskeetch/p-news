import React from "react";
import { Nav, Backdrop } from "common/components";
import { StoryList, NotFoundGame, StoryDetail, Header } from "./components";
import useGame from "@domains/game/hooks/use-game";
import styles from "./game.module.css";
import { useAddParticipantValidate } from "./hooks/use-add-participant";

const EnterGame = ({ game }) => {
  const { participant } = useAddParticipantValidate(game.id);

  return (
    <>
      <Nav />
      <Header name={game.name} />
      <div className={styles.container}>
        <StoryList game={game} />
        <StoryDetail game={game} />
      </div>

      <Backdrop open={!participant} />
    </>
  );
};
const Game = ({ id }) => {
  const { game, isLoading } = useGame(id);
  if (isLoading) return <Backdrop open={isLoading} />;

  if (!game) return <NotFoundGame />;

  return <EnterGame game={game} />;
};

export default Game;
