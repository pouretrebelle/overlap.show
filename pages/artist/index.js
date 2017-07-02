import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import { getArtistsFromRoute } from 'src/utils/contentUtils';
import StaticTitle from 'src/components/common/PageTitle/StaticTitle';
import Artists from 'src/components/Artists';

const ArtistsPage = ({ route }) => (
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

    <StaticTitle />
    <div style={{height: '6rem'}} />
    <Artists artists={getArtistsFromRoute(route)}/>

  </div>
);

ArtistsPage.propTypes = {
  route: PropTypes.object,
};

export default ArtistsPage;
