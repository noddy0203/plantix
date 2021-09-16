import React from "react";
import Home from "./components/Home";
import Bill from "./components/Bill";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/bill">
          <Bill />
        </Route>
      </Switch>
    </>
  );
};

export default App;
