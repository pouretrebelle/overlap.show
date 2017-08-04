import React from 'react';
import PropTypes from 'prop-types';

import { getArtistsFromRoute } from '../../utils/contentUtils';
import SplashIntro from './SplashIntro';
import What from '../About/What';
import When from '../About/When';
import Where from '../About/Where';
import ArtistList from '../Artists/ArtistList';

const Home = ({ route }) => (
  <div>

    <SplashIntro />

    <What />
    <When />
    <Where />
    <ArtistList artists={getArtistsFromRoute(route)} />

  </div>
);

Home.propTypes = {
  route: PropTypes.object,
};

export default Home;
