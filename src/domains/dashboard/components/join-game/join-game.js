import React, { useState } from "react";
import styles from "./join-game.module.css";
import { Title, Button, Input } from "common/components";
import { useRouter } from "next/router";

const JoinGame = () => {
  const [value, setValue] = useState("");
  const routes = useRouter();

  const handleClick = () => {
    if (value) {
      routes.push(`game/${value}`);
    }
  };
  return (
    <div className={styles.container}>
      <Title variant="h4" className={styles.title}>
        join a game!
      </Title>
      <Input label="Code" onChange={(e) => setValue(e.target.value)} />
      <Button
        label="Go to"
        variant="contained"
        color="primary"
        onClick={handleClick}
      />
    </div>
  );
};

export default JoinGame;
