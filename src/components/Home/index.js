import React from 'react';
import PropTypes from 'prop-types';

import SplashIntro from './SplashIntro';
import About from '../About';
import ArtistList from '../Artists/ArtistList';

const Home = ({ siteMetadata, artists }) => (
  <div>
    <SplashIntro title={siteMetadata.shortTitle} />
    <About />
    <ArtistList artists={artists} />
  </div>
);

Home.propTypes = {
  siteMetadata: PropTypes.object,
  artists: PropTypes.array,
};

export default Home;
