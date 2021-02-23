import React, * as react from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/grid";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [listOpen, setListOpen] = react.useState(false);
  return (
    <ul>
      <li
        onClick={() => {
          setListOpen(!listOpen);
          console.log("List Open: ", listOpen);
        }}
      >
        Projects
      </li>
      <div>{listOpen ? <Dropdown /> : null}</div>
      <li onClick={() => setListOpen(false)}>Blog</li>
      <li onClick={() => setListOpen(false)}>Skills</li>
      <li onClick={() => setListOpen(false)}>Story</li>
    </ul>
  );
};

export default Navbar;
