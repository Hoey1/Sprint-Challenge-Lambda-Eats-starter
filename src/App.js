import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useHistory } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/pizza">
          <p>You can remove this code and create your own header</p>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
