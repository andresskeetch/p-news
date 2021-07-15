import React, { useState } from "react";
import { Button, Dialog, Input } from "common/components";
import ShareIcon from "@material-ui/icons/Share";
import styles from "./share-game.module.css";

const ShareGame = ({ gameId }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="default"
        className={styles.button}
        onClick={() => setOpen(true)}
        label={<ShareIcon />}
      />
      <Dialog
        title="Share Game"
        description="To invite any friends to this game copy this URL or share the code below."
        open={open}
        handleClose={() => setOpen(false)}
      >
        <Input
          label="Story name"
          autoComplete={"off"}
          value={gameId}
          disabled={true}
        />
      </Dialog>
    </>
  );
};

export default ShareGame;
