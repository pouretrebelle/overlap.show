import React from 'react';
import PropTypes from 'prop-types';

import SplashIntro from './SplashIntro';
import What from '../About/What';
import When from '../About/When';
import Where from '../About/Where';
import ArtistList from '../Artists/ArtistList';

const Home = ({ siteMetadata, artists }) => (
  <div>

    <SplashIntro title={siteMetadata.shortTitle} />

    <What />
    <When />
    <Where />
    <ArtistList artists={artists} />

  </div>
);

Home.propTypes = {
  siteMetadata: PropTypes.object,
  artists: PropTypes.array,
};

export default Home;
