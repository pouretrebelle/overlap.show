import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './About.styl';

import ResponsiveImage from 'src/components/common/images/ResponsiveImage';

const Who = ({ artists }) => {
  const artistList = artists.map((artist, i) => (
    <li key={i} className={styles.artist}>
      <Link
        to={prefixLink(artist.path)}
        title={artist.data.name}
        style={{width: '100%'}}
      >
        { artist.data.portrait ? (
          <ResponsiveImage
            imagePath={`portraits/${artist.data.portrait}`}
            width={[248, 183, 168]}
            maxBreakpoint={1176}
            alt={artist.data.name}
          />
        ) : (
          <div className={styles.noPortrait}>
            {artist.data.name}
          </div>
        ) }
      </Link>
    </li>
  ));

  return (
    <section className={styles.wrapper}>
      <div className={styles.fullContent}>
        <ul className={styles.artistList}>
          {artistList}
        </ul>
      </div>
    </section>
  );
};

Who.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default Who;
