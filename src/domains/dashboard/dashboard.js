import React from "react";
import { Nav, Backdrop } from "common/components";
import { Content } from "./components";
import useCreateGame from "./hooks/use-create-game";
import useGameList from "./hooks/use-game-list";

const Dashboard = () => {
  const { handleCreateGame, isLoading } = useCreateGame();
  const { games } = useGameList();

  return (
    <>
      <Nav />
      <Content handleCreateGame={handleCreateGame} games={games} />
      <Backdrop open={isLoading} />
    </>
  );
};

export default Dashboard;
