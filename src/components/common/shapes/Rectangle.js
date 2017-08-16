import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Rectangle.module.styl';

import { randomMinMax } from '../../../utils/numberUtils';

class Rectangle extends Component {

  constructor(props) {
    super(props);
    this.width = this.props.width || randomMinMax(80, 250);
    this.height = this.props.height || this.width * randomMinMax(0.7, 1/0.7);
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

Rectangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Rectangle;
