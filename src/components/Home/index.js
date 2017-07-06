import React from 'react';
import PropTypes from 'prop-types';

import { getArtistsFromRoute } from 'src/utils/contentUtils';
import SplashIntro from './SplashIntro';
import What from 'src/components/About/What';
import When from 'src/components/About/When';
import Where from 'src/components/About/Where';
import Artists from 'src/components/Artists';

const Home = ({ route }) => (
  <div>

    <SplashIntro />

    <What />
    <When />
    <Where />
    <Artists artists={getArtistsFromRoute(route)} />

  </div>
);

Home.propTypes = {
  route: PropTypes.object,
};

export default Home;
