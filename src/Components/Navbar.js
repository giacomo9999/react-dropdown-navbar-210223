import React, * as react from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Dropdown from "./Dropdown";

import styles from "./Navbar.module.scss";

const NavBar = () => {
  const [listOpen, setListOpen] = react.useState(false);

  const myCallback = (listOpen) => {
    setListOpen(listOpen);
  };

  return (
    <Grid container className={styles.navbar}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Link to="/">
          <h2 className={styles.logo}>LOGO</h2>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}></Grid>
      <ul>
        <li onClick={() => setListOpen(!listOpen)}>Projects</li>
        <li onClick={() => setListOpen(false)}>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={() => setListOpen(false)}>
          <Link to="/skills">Skills</Link>
        </li>
        <li onClick={() => setListOpen(false)}>
          <Link to="/story">Story</Link>
        </li>
      </ul>
      <div className={styles.dropdown}>
        {listOpen ? <Dropdown callbackFromParent={myCallback} /> : null}
      </div>
    </Grid>
  );
};
export default NavBar;
