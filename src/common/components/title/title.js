import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Title = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.title} {...rest}>
      {children}
    </Typography>
  );
};

export default Title;
