import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Skills from "./Pages/Skills";
import Story from "./Pages/Story";
import d3WorldMap from "./Pages/d3WorldMap";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/d3-world-map" component={d3WorldMap} />
        <Route exact path="/story" component={Story} />
      </Switch>

      <p> FOOTER</p>
    </div>
  );
}

export default App;
