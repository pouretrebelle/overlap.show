import React, { Component } from 'react';

import styles from './RectangleStack.module.styl';

import { randomMinMax, randomZerodInt } from '../../../utils/numberUtils';
import RectangleOutline from './RectangleOutline';

class RectangleStack extends Component {

  constructor(props) {
    super(props);
    this.quantity = 4 + randomZerodInt(4);
    this.stackRotation = randomZerodInt(4);
    this.size = randomMinMax(80, 250);
    this.gap = randomMinMax(5, 30);
    this.width = randomMinMax(50, 250);
    this.height = this.gap * (this.quantity + randomZerodInt(7));
  }

  render() {
    const rectangles = Array.from({ length: this.quantity }, (v, k) => (
      <div className={styles.stack} style={{ height: this.gap }} key={k}>
        <RectangleOutline width={this.width} height={this.height} />
      </div>
    ));

    return (
      <div className={styles[`rotate${this.stackRotation}`]}>
        {rectangles}
      </div>
    );
  }
}

export default RectangleStack;
