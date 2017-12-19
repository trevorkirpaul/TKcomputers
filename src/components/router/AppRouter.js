import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import WithRouter from '../HoC/WithRouter';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Admin from '../admin/Admin';
import SignInWrapper from '../accountActions/SigninWrapper';
import SignUpWrapper from '../accountActions/SignUpWrapper';
import Computers from '../products/computers/Computers';
import LoggedOut from '../accountActions/LoggedOut';
import Components from '../products/Components';
import ProductsMain from '../products/ProductsMain';
import NotFound from '../404/NotFound';
import CheckAuth from '../HoC/CheckAuth';
import BlockIfAuth from '../HoC/BlockIfAuth';
import Profile from '../profile/Profile';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import PreBuiltCreator from '../admin/preBuiltCreator/PreBuiltCreator';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            path="/create/computer"
            component={CheckAuth(PreBuiltCreator)}
          />
          <Route path="/cart" component={CheckAuth(ShoppingCart)} />
          <Route path="/profile" component={CheckAuth(Profile)} />
          <Route path="/useraction/loggedout" component={LoggedOut} />
          <Route path="/products/components" component={Components} />
          <Route path="/products/computers" component={Computers} />
          <Route path="/products" component={ProductsMain} />
          <Route path="/signup" component={BlockIfAuth(SignUpWrapper)} exact />
          <Route path="/signin" component={BlockIfAuth(SignInWrapper)} exact />
          <Route path="/admin" component={CheckAuth(Admin)} exact />
          <Route path="/" component={Welcome} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
