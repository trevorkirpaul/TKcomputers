import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import Welcome from '../welcome/Welcome'; 
import Admin from '../admin/Admin';
import NotFound from '../404/NotFound';

export default () => {
  return (
   <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/admin" component={Admin} exact/>
        <Route path="/" component={Welcome} exact/>
        <Route component={NotFound}/>
      </Switch>
    </div>
   </BrowserRouter>
  )
}
