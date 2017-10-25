import React from 'react';
import styles from './Video.module.styl';

const Video = () => (
  <div className={styles.videoWrapper}>
    <div className={styles.video}>
      <div className={styles.fitVids}>
        <iframe src='https://player.vimeo.com/video/239667082?color=E5162E&title=0&byline=0&portrait=0' width='600' height='338' frameBorder='0' allowFullScreen />
      </div>
    </div>
  </div>
);

export default Video;
