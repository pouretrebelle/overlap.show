import React, { Component } from 'react';

import styles from './CircleGrid.module.styl';

import { randomZerodInt } from '../../../utils/numberUtils';

const CIRCLE_SIZE = 13;

class CircleGrid extends Component {

  constructor(props) {
    super(props);
    this.width = 4+randomZerodInt(10);
    this.height = 4+randomZerodInt(10);
  }

  render() {
    const style = {
      width: this.width * CIRCLE_SIZE,
    };

    const circles = Array.from({ length: this.width*this.height }, (v, k) => (
      <div className={styles.circle} key={k}/>
    ));

    return (
      <div style={style}>
        {circles}
      </div>
    );
  }
}

export default CircleGrid;
