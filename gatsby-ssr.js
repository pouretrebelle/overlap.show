import React from 'react';
import { Provider, useStaticRendering } from 'mobx-react';
import UIStore from 'src/stores/UIStore';

exports.wrapRootComponent  = Root => {
  const store = new UIStore;
  useStaticRendering(true);

  return () => (
    <Provider UIStore={store}>
      <Root />
    </Provider>
  );
};
