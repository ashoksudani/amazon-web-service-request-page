import React, { Component } from 'react';
import WebserviceRequest from './web-service-request';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import AppHeader from 'components/app-header';
import NotFound from 'components/not-found';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <>
            <AppHeader />
            <Switch>
              <Route path="/" exact component={WebserviceRequest} />
              <Route component={NotFound} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
