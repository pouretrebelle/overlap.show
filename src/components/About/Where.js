import React from 'react';

import styles from './About.module.styl';

import GoogleMapEmbed from './GoogleMapEmbed';

const Where = () => (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>
      Where
    </h2>
    <div className={styles.content}>
      <p>
        <em className={styles.emphasis}>St James</em> Hatcham Building,
        <br />
        <em className={styles.emphasis}>Goldsmiths</em> University,
        <br />
        SE14 6AD
      </p>

      <GoogleMapEmbed
        containerElement={
          <div style={{ height: 400 }} className={styles.mapEmbed} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
      />
    </div>
  </section>
);

export default Where;
