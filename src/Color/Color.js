import React from "react";
import useStyles from "./style";

export default ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} title={value}>
      <span className={classes.color} style={{ backgroundColor: value }} />
    </div>
  );
};
