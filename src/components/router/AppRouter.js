import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import WithRouter from '../HoC/WithRouter';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome'; 
import Admin from '../admin/Admin';
import SignInWrapper from '../accountActions/SigninWrapper';
import SignUpWrapper from '../accountActions/SignUpWrapper';
import Computers from '../products/Computers';
import NotFound from '../404/NotFound';




export default () => {
  return (
   <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/products/computers" component={Computers}/>
        <Route path="/signup" component={SignUpWrapper} exact/>
        <Route path="/signin" component={SignInWrapper} exact/>
        <Route path="/admin" component={Admin} exact/>
        <Route path="/" component={Welcome} exact/>
        <Route component={NotFound}/>
      </Switch>
    </div>
   </BrowserRouter>
  )
}

