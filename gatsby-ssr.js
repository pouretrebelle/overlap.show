import React from 'react';
import { Provider, useStaticRendering } from 'mobx-react';
import UIStore from './src/stores/UIStore';
import { renderToString } from 'react-dom/server';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  useStaticRendering(true);

  const ConnectedBody = () => (
    <Provider UIStore={UIStore}>
      {bodyComponent}
    </Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody/>));
};
