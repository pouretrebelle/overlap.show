import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './RectangleOutline.styl';

import { randomMinMax } from 'src/utils/numberUtils';

class RectangleOutline extends Component {

  constructor(props) {
    super(props);
    this.width = randomMinMax(80, 250);
    this.height = this.width * randomMinMax(0.7, 1/0.7);
  }

  render() {
    const style = {
      width: this.width,
      height: this.height,
    };

    return (
      <div style={style} className={styles.rectangle} />
    );
  }
}

export default RectangleOutline;
