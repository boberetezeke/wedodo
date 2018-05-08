import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Login from './components/Home/Login';
import { rootReducer } from "../store/rootReducer";

import './styles/styles.scss';

const store = createStore(rootReducer)

render((
  <Router>
    <Provider store={store}>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/helloworld" component={HelloWorld}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFound}/>
          </Switch>
        </App>
    </Provider>
  </Router>
), document.getElementById('app'));
