import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import { getArtistsFromRoute } from 'src/utils/contentUtils';
import StaticTitle from 'src/components/common/PageTitle/StaticTitle';
import ArtistList from 'src/components/Artists/ArtistList';

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
    <ArtistList artists={getArtistsFromRoute(route)}/>

  </div>
);

ArtistsPage.propTypes = {
  route: PropTypes.object,
};

export default ArtistsPage;
