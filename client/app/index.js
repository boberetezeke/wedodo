import React from 'react';
import { render } from 'react-dom';

import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'

import { history } from './authentication/helpers/history'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Login from './components/Home/Login';
import { rootReducer } from "../store/rootReducer";

import { PrivateRoute } from './authentication/components/PrivateRoute.jsx'
import { LoginPage } from './authentication/components/LoginPage.js'
import { RegisterPage } from './authentication/components/RegisterPage.jsx'

import { configureFakeBackend } from './authentication/actions/fakeBackEnd'

import './styles/styles.scss';

const store = createStore(
  rootReducer,
  { auth: {authentication: {loggingIn: false}, registration: {registering: false} } },
  applyMiddleware(
    thunkMiddleware
  )
)


configureFakeBackend()

//  <Route exact path="/" component={Home}/>
// <Route path="/helloworld" component={HelloWorld}/>

render((
  <Provider store={store}>
    <Router history={history}>
        <App>
          <Switch>
            <PrivateRoute exact path="/" component={HelloWorld} />
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route component={NotFound}/>
          </Switch>
        </App>
    </Router>
  </Provider>
), document.getElementById('app'));
