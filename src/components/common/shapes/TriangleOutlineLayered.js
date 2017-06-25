import React, { Component } from 'react';

import styles from './TriangleOutlineLayered.styl';

import { randomMinMax, randomZerodInt } from 'src/utils/numberUtils';

class TriangleOutlineLayered extends Component {

  constructor(props) {
    super(props);
    this.size = randomMinMax(80, 250);
    this.quantity = 4 + randomZerodInt(3);
    this.rotation = randomZerodInt(4);
  }

  render() {
    const style = {
      width: this.size,
      height: this.size,
    };

    const triangles = Array.from({ length: this.quantity }, (v, k) => (
      <div className={styles.triangleWrapper} key={k}>
        <div style={style} className={styles.triangle}/>
      </div>
    ));

    return (
      <div className={styles[`rotate${this.rotation}`]}>
        {triangles}
      </div>
    );
  }
}

export default TriangleOutlineLayered;
