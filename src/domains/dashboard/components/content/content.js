import React from "react";
import { Title, Paper, Tabs } from "common/components";
import styles from "./content.module.css";
import useTabs from "@domains/dashboard/hooks/use-tabs";
import CreateForm from "../create-form/create-form";
import GameList from "../game-list/game-list";

const Content = ({ handleCreateGame, games }) => {
  const { tab, setTab } = useTabs();
  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>
        <Title variant="h4">Dashboard</Title>
        <Tabs
          labels={["New Game", "My saved games"]}
          tabActive={tab}
          handleClick={setTab}
        >
          {tab === 0 && <CreateForm handleCreateGame={handleCreateGame} />}
          {tab === 1 && <GameList games={games} />}
        </Tabs>
      </Paper>
    </div>
  );
};

export default Content;
