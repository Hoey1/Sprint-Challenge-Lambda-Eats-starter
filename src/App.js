import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useHistory } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import Pizza from "./components/Pizza";

// pizza order stuff here with dummy api

//

// look at GP for Forms - need initial state of order (blank)

//

// Form Errors

//

// import yup /shape stuff

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route path="/pizza">
          <Pizza />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
