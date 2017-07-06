import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './Artists.styl';

import ResponsiveImage from 'src/components/common/images/ResponsiveImage';

const Artists = ({ artists, currentArtist }) => {
  const artistList = artists.map((artist, i) => {
    const artistClasses = classNames({
      [styles.artist]: true,
      [styles.currentArtist]: artist == currentArtist,
    });

    return (
      <li key={i} className={artistClasses}>
        { artist.data.portrait &&
          <Link
            to={prefixLink(artist.path)}
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

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
  currentArtist: PropTypes.object,
};

export default Artists;
