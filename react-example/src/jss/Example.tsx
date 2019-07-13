import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: { display: "flex", width: "100%" },
  flex: { flex: 1 }
});

export const Example: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>단락 1</div>
      <div className={classes.flex}>단락 2</div>
    </div>
  );
};
