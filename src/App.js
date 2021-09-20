import React from "react";
import Home from "./components/Home";
import Bill from "./components/Bill";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bill">
            <Bill />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
