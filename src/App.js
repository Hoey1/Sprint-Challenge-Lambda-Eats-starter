import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pizza from "./components/Pizza";
import PizzaComplete from "./components/PizzaComplete";

// pizza order stuff here with dummy api
const url = "https://reqres.in/api/users";

// look at GP for Forms - need initial state of order (blank)
const initialPizzaOrder = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bellpeppers: false,
  redonions: false,
  instructions: "",
};

// Form Errors
const initialOrderErrors = {
  name: "Name must be at least 2 characters!",
};

// import yup /shape stuff
const formSchema = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters!"),
});

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder);
  const [orderErrors, setOrderErrors] = useState(initialOrderErrors);
  const [orderButtonEnabled, setOrderButtonEnabled] = useState(false);
  const [allOrders, setAllOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    formSchema.isValid(pizzaOrder).then((valid) => {
      setOrderButtonEnabled(valid);
    });
  }, [pizzaOrder]);

  const updateForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setPizzaOrder({ ...pizzaOrder, [name]: value });

    if (name === "name") {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then((valid) => {
          setOrderErrors({ ...orderErrors, [name]: "" });
        })
        .catch((err) => {
          setOrderErrors({ ...orderErrors, [name]: err.errors[0] });
        });
    }
  };

  const updateCheckbox = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setPizzaOrder({ ...pizzaOrder, [name]: checked });
  };

  const onSubmit = (event) => {
    // stop refresh
    event.preventDefault();

    history.push("/pizza/complete");

    const newPizzaOrder = {
      name: pizzaOrder.name,
      size: pizzaOrder.size,
      pepperoni: pizzaOrder.pepperoni ? "Yes" : "No",
      sausage: pizzaOrder.sausage ? "Yes" : "No",
      bellpeppers: pizzaOrder.bellpeppers ? "Yes" : "No",
      redonions: pizzaOrder.redonions ? "Yes" : "No",
      instructions: pizzaOrder.instructions,
    };

    axios
      .post(url, newPizzaOrder)
      .then((res) => {
        setAllOrders([...allOrders, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza/complete">
          <PizzaComplete allOrders={allOrders} />
        </Route>
        <Route path="/pizza">
          <Pizza
            allOrders={allOrders}
            onSubmit={onSubmit}
            orderErrors={orderErrors}
            orderButtonEnabled={orderButtonEnabled}
            updateCheckbox={updateCheckbox}
            updateForm={updateForm}
            pizzaOrder={pizzaOrder}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
