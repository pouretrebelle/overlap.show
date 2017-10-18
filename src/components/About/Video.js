import React from 'react';
import styles from './Video.module.styl';

const Video = () => (
  <div className={styles.videoWrapper}>
    <div className={styles.video}>
      <div className={styles.fitVids}>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/pPa2slAh93k?rel=0&amp;showinfo=0' frameBorder='0' allowFullScreen />
      </div>
    </div>
  </div>
);

export default Video;
