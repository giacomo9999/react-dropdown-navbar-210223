import React, * as react from "react";
import { Link } from "react-router-dom";
import { Grid, ListItem } from "@material-ui/core";

const Dropdown = ({ callbackFromParent }) => {
  const node = react.useRef();
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      callbackFromParent(true);
      return;
    }
    // outside click
    callbackFromParent(false);
  };

  react.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Grid container ref={node}>
      <Grid item xs={12} sm={4} md={4}>
        <h4>Web Dev</h4>
        <ListItem onClick={() => callbackFromParent(false)}>
          <Link to="/d3-world-map">D3 World Map</Link>
        </ListItem>
        <ListItem>Keppler</ListItem>
        <ListItem>P5.js</ListItem>
        <ListItem>Gatsby</ListItem>
        <ListItem>GraphQL</ListItem>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <h4>Data Science</h4>
        <ListItem>Data mining</ListItem>
        <ListItem>Big Data and AI</ListItem>
        <ListItem>Django web app</ListItem>
        <ListItem>Kaggle Challenge</ListItem>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <h4>Design</h4>
        <ListItem>Posters</ListItem>
        <ListItem>Sketch</ListItem>
        <ListItem>Videos</ListItem>
      </Grid>
    </Grid>
  );
};

export default Dropdown;
