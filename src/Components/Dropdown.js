import React, * as react from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/grid";

const Dropdown = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        {""}
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4>Web Dev</h4>
        <ul>
          <li>D3 World Map</li>
          <li>Kepler</li>
          <li>P5</li>
          <li>Gatsby</li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4>Data Science</h4>
        <ul>
          <li>Data Mining</li>
          <li>Django Web Apps</li>
          <li>Kaggle</li>
          <li>US Phone Complaints</li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4>Design</h4>
        <ul>
          <li>Posters</li>
          <li>Sketch</li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4>Video</h4>
        <ul>
          <li>Youtube Vlog</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Dropdown;
