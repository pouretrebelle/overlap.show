import React from 'react';
import { Provider } from 'mobx-react';
import UIStore from 'src/stores/UIStore';

exports.wrapRootComponent  = Root => {
  const store = new UIStore;

  return () => (
    <Provider UIStore={store}>
      <Root />
    </Provider>
  );
};
