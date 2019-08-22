import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import HomeView from '../../modules/home/home.view';
import BowView from '../../modules/bow/bow.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/bow/" exact component={ BowView } />
      { /*<Route component={ HomeView } />*/ }
    </Switch>
  );
}

export default Routing;