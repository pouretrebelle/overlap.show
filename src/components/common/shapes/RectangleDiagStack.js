import React, { Component } from 'react';

import styles from './RectangleStack.module.styl';

import { randomMinMax, randomZerodInt } from '../../../utils/numberUtils';
import RectangleOutline from './RectangleOutline';

class RectangleStack extends Component {

  constructor(props) {
    super(props);
    this.unitSize = randomMinMax(15, 30);
    this.unitsY = 2 + randomZerodInt(3);
    this.unitsX = this.unitsY + randomZerodInt(3);
    this.quantity = this.unitsX + randomZerodInt(4);
  }

  rectangleStyle = (i) => {
    return {
      height: this.unitSize - 3, // minus border for half border-box
      marginLeft: (i - 1) * (this.unitSize - 3),
    };
  };

  render() {
    const unitWidth = this.unitsX * (this.unitSize - 3) - 3;
    const unitHeight = this.unitsY * (this.unitSize - 3) - 3;

    const rectangles = Array.from({ length: this.quantity }, (v, k) => (
      <div className={styles.stack} style={this.rectangleStyle(k)} key={k}>
        <RectangleOutline width={unitWidth} height={unitHeight} />
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
