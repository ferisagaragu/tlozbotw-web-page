import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import HomeView from '../../modules/home/home.view';
import BowView from '../../modules/bow/bow.view';
import FaqView from '../../modules/faq/faq.view';
import Experimental from '../../modules/experimental/experimental';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/bow/" exact component={ BowView } />
      <Route path="/faq/" exact component={ FaqView } />
      <Route path="/experimental/" exact component={ Experimental } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;