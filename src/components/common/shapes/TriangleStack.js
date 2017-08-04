import React, { Component } from 'react';

import styles from './TriangleStack.styl';

import { randomMinMax, randomZerodInt } from '../../../utils/numberUtils';
import TriangleOutline from './TriangleOutline';

class TriangleStack extends Component {

  constructor(props) {
    super(props);
    this.quantity = 4 + randomZerodInt(4);
    this.stackRotation = randomZerodInt(4);
    this.rotation = randomZerodInt(4);
    this.size = randomMinMax(80, 250);
    this.gap = randomMinMax(10, 30);
  }

  render() {
    const triangles = Array.from({ length: this.quantity }, (v, k) => (
      <div className={styles.stack} style={{ height: this.gap }} key={k}>
        <TriangleOutline size={this.size} rotation={this.rotation} />
      </div>
    ));

    return (
      <div className={styles[`rotate${this.stackRotation}`]}>
        {triangles}
      </div>
    );
  }
}

export default TriangleStack;
