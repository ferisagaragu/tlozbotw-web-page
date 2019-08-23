import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import HomeView from '../../modules/home/home.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView }/>
      { /*<Route component={ HomeView } />*/ }
    </Switch>
  );
}

export default Routing;