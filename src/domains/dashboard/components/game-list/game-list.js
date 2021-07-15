import React from "react";
import { Accordion, Title, Button } from "common/components";
import styles from "./game-list.module.css";

const GameList = ({ games = [] }) => {
  const getData = () => {
    return games.map((game) => ({
      header: <p className={styles.header}>{game.name.toUpperCase()}</p>,
      detail: (
        <div className={styles.containerdetail}>
          <Button
            label="go To"
            variant="contained"
            color="secondary"
            href={`/game/${game.id}`}
            className={styles.button}
          />
          <p>{game.description}</p>
        </div>
      ),
    }));
  };
  return (
    <div className={styles.container}>
      <Title variant="h4" className={styles.title}>
        My games
      </Title>
      <Accordion data={getData({} || {})} />
    </div>
  );
};

export default GameList;
