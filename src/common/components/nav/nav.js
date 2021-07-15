import React from "react";
import { Button } from "common/components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./nav.module.css";
import { useLogout, useUserSession } from "common/hooks";

export default function NavBar() {
  const { hasSession } = useUserSession();
  const { handleLogout } = useLogout();
  const handleLogin = () => {};

  const handleLogOut = () => {
    handleLogout();
  };

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Planing News
          </Typography>
          {hasSession ? (
            <>
              <Button
                color="inherit"
                onClick={handleLogOut}
                className={styles.button}
                label={"Dashboard"}
                href="/"
              />
              <Button
                color="inherit"
                onClick={handleLogOut}
                className={styles.button}
                label={"Log out"}
              />
            </>
          ) : (
            <Button
              color="inherit"
              onClick={handleLogin}
              className={styles.button}
              label={"Login"}
              href="/login"
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
