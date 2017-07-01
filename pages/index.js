import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import { getArtistsFromRoute } from 'src/utils/contentUtils';
import ShapeField from 'src/components/common/ShapeField';
import What from 'src/components/About/What';
import When from 'src/components/About/When';
import Where from 'src/components/About/Where';
import Who from 'src/components/About/Who';

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

    <ShapeField />

    <What />
    <When />
    <Where />
    <Who artists={getArtistsFromRoute(route)}/>

  </div>
);

IndexPage.propTypes = {
  route: PropTypes.object,
};

export default IndexPage;
