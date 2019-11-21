import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import ErrorBoundaryRoute from 'src/shared/error/error-boundary-route';
// import PrivateRoute from 'src/shared/auth/private-route';
import PageNotFound from 'src/shared/error/page-not-found';
import Home from 'src/modules/home/home';

// import Login from 'app/modules/login/login';
// import Register from 'app/modules/account/register/register';
// import Activate from 'app/modules/account/activate/activate';
// import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
// import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
// import Logout from 'app/modules/login/logout';


// import { AUTHORITIES } from 'app/config/constants';

// tslint:disable:space-in-parens
// const Account = Loadable({
//   loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
//   loading: () => <div>loading ...</div>
// });

// const Admin = Loadable({
//   loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
//   loading: () => <div>loading ...</div>
// });
// // tslint:enable

// const Bhxh = Loadable({
//   loader: () => import('app/modules/bao-hiem-xa-hoi/mau-bao-hiem'),
//   loading: () => <div>loading ...</div>
// });
// tslint:enable

const Routes = () => (
  <div className="view-routes">
    <Switch>
      {/* <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <PrivateRoute path="/entity" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} /> */}
      <ErrorBoundaryRoute path="/" exact component={Home} />
      <ErrorBoundaryRoute component={PageNotFound} /> 
    </Switch>
  </div>
);

export default Routes;
