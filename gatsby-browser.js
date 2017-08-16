import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import UIStore from './src/stores/UIStore';

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider UIStore={UIStore}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};

exports.onRouteUpdate = location => {
  if (typeof window.ga !== 'undefined') {
    window.ga('send', 'pageview', {
      page: location.pathname,
    });
  }
};
