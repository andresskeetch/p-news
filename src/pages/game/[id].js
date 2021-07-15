import React from "react";
import { useRouter } from "next/router";
import Module from "domains/game/game";
import SessionProvider from "common/utils/session/session-provider";

const Game = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <SessionProvider>
      <Module id={id} />
    </SessionProvider>
  );
};

export default Game;
