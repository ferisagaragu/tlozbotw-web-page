import React from 'react';
import { Route, Switch } from "react-router";
import HomeView from '../../modules/home/home.view';
import BowView from '../../modules/bow/bow.view';
import AboutView from '../../modules/about/about.view';
import Experimental from '../../modules/experimental/experimental';
import MaterialView from '../../modules/material/material.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/bow/" exact component={ BowView } />
      <Route path="/about/" exact component={ AboutView } />
      <Route path="/material/" exact component={ MaterialView } />
      <Route path="/experimental/" exact component={ Experimental } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;