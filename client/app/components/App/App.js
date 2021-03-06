import React, { Component } from 'react';

import StatefulHeader from '../../containers/StatefulHeader'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <>
    <StatefulHeader />

    <div className="jumbotron">
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          {children}
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default App;
