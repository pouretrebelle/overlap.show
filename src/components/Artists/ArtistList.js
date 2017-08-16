import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';

import styles from './ArtistList.module.styl';

import ResponsiveImage from '../common/images/ResponsiveImage';

const ArtistList = ({ artists, currentArtist }) => {
  const artistList = artists.map((artist, i) => {
    const artistClasses = classNames({
      [styles.artist]: true,
      [styles.currentArtist]: currentArtist && artist.frontmatter.name === currentArtist.frontmatter.name,
    });

    return (
      <li key={i} className={artistClasses}>
        { artist.frontmatter.portrait &&
          <Link
            to={artist.fields.slug}
            title={artist.frontmatter.name}
          >
            <div className={styles.portrait}>
              <ResponsiveImage
                imagePath={`portraits/${artist.frontmatter.portrait}`}
                width={[248, 183, 168]}
                maxBreakpoint={1176}
                alt={artist.frontmatter.name}
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
