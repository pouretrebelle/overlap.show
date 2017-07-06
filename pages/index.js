import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import Home from 'src/components/Home';

const IndexPage = ({ route }) => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        {
          'name': 'description',
          'content': config.siteDescription,
        },
        {
          'name': 'keywords',
          'content': config.siteKeywords,
        },
      ]}
    />

    <Home route={route} />

  </div>
);

IndexPage.propTypes = {
  route: PropTypes.object,
};

export default IndexPage;
