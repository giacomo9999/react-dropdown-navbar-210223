import { Link, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Skills from "./Pages/Skills";
import Story from "./Pages/Story";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/story" component={Story} />
      </Switch>
      <p>Footer</p>
    </div>
  );
}

export default App;
