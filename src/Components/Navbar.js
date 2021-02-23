import React, * as react from "react";
import { Link, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/grid";

import Dropdown from "./Dropdown";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [listOpen, setListOpen] = react.useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <h3>LOGO</h3>
      </Link>
      <ul>
        <li
          onClick={() => {
            setListOpen(!listOpen);
            console.log("List Open: ", listOpen);
          }}
        >
          Projects
        </li>
        <div className={styles.dropdown}>{listOpen ? <Dropdown /> : null}</div>
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
    </nav>
  );
};

export default Navbar;
