import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from "../AppHeader";
import Drinks from "../../containers/Drinks";
import Food from "../../containers/Food";
import Discounts from "../../containers/Discounts";
import Search from "../../containers/Search";
import ShoppingCart from "../ShoppingCart";

import { AppRoute } from "../../consts";
import "./index.scss";

const { DRINKS, FOOD, DISCOUNTS, SEARCH } = AppRoute;

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path={DRINKS} component={Drinks} />
        <Route path={FOOD} component={Food} />
        <Route path={DISCOUNTS} component={Discounts} />
        <Route path={SEARCH} component={Search} />
      </Switch>
      <ShoppingCart />
    </div>
  );
};

export default App;
