import React from 'react';

import styles from './About.styl';

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
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.404664102169!2d-0.03883999838706616!3d51.47480648208036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzI1LjkiTiAwwrAwMicxNy4xIlc!5e0!3m2!1sen!2suk!4v1498862160052' width='600' height='300' frameBorder='0' allowFullscreen></iframe>
    </div>
  </section>
);

export default Where;
