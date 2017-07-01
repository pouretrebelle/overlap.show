import React from 'react';
import PropTypes from 'prop-types';

import styles from './About.styl';

const Who = ({ artists }) => {
  const artistList = artists.map((artist, i) => (
    <li key={i}>
      {artist.data.name}
    </li>
  ));

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Who
      </h2>
      <div className={styles.content}>
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
