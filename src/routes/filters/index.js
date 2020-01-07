import React from "react";
import { Card, Cards } from "../../components/cards";
import { sampleImage } from "../../config/default.config.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10px 30px",
    height: "calc(100% - 132px)"
  }
}));

function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Cards>
        <Card img={sampleImage} />
      </Cards>
    </div>
  );
}

export default Filter;
