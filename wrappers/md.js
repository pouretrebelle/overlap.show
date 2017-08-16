import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import { getArtistsFromRoute } from '../utils/contentUtils';
import StaticTitle from '../components/common/PageTitle/StaticTitle';
import ArtistList from '../components/Artists/ArtistList';
import Artist from '../components/Artists/Artist';

const Markdown = ({ route }) => {
  const page = route.page.data;
  const description = page.description || '';
  const keywords = page.keywords || '';
  const meta = [
    {'name': 'description', 'content': description},
    {'name': 'keywords', 'content': keywords },
  ];

  return (
    <div>
      <Helmet
        title={`${config.siteTitle} | ${page.title}`}
        meta={meta}
      />

      <StaticTitle />

      <Artist page={route.page} />

      <ArtistList artists={getArtistsFromRoute(route)} currentArtist={route.page}/>

    </div>
  );
};

Markdown.propTypes = {
  route: PropTypes.object,
};

export default Markdown;
