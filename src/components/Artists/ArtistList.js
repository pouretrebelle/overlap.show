import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';

import styles from './ArtistList.styl';

import ResponsiveImage from '../common/images/ResponsiveImage';

const ArtistList = ({ artists, currentArtist }) => {
  const artistList = artists.map((artist, i) => {
    const artistClasses = classNames({
      [styles.artist]: true,
      [styles.currentArtist]: artist == currentArtist,
    });

    return (
      <li key={i} className={artistClasses}>
        { artist.data.portrait &&
          <Link
            to={artist.path}
            title={artist.data.name}
          >
            <div className={styles.portrait}>
              <ResponsiveImage
                imagePath={`portraits/${artist.data.portrait}`}
                width={[248, 183, 168]}
                maxBreakpoint={1176}
                alt={artist.data.name}
              />
            </div>
          </Link>
        }
      </li>
    );
  });

  return (
    <ul className={styles.artistList}>
      {artistList}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  currentArtist: PropTypes.object,
};

export default ArtistList;
