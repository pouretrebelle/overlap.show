import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './RectangleBands.styl';

import { randomMinMax, randomZerodInt } from 'src/utils/numberUtils';

class RectangleBands extends Component {

  constructor(props) {
    super(props);
    this.width = randomMinMax(50, 250);
    this.bands = 2 + randomZerodInt(4);
    this.bandWidth = randomMinMax(5, 30);
    this.rotation = randomZerodInt(2);
  }

  render() {
    const wrapperClasses = classNames({
      [styles.wrapper]: true,
      [styles[`rotate${this.rotation}`]]: true,
    });
    const wrapperStyle = {
      width: this.width,
      paddingBottom: this.bandWidth,
    };
    const bandStyle = {
      height: this.bandWidth,
    };
    const bands = Array.from({ length: this.bands }, (v, k) => (
      <div style={bandStyle} className={styles.band} key={k}/>
    ));

    return (
      <div style={wrapperStyle} className={wrapperClasses}>
        {bands}
        <div style={bandStyle} className={styles.spacer} />
        {bands}
      </div>
    );
  }
}

export default RectangleBands;
