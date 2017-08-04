import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Triangle.styl';

import { randomMinMax, randomZerodInt } from '../../../utils/numberUtils';

class Triangle extends Component {

  constructor(props) {
    super(props);
    this.size = randomMinMax(80, 250);
    this.rotation = randomZerodInt(4);
  }

  render() {
    const style = {
      borderTopWidth: this.size,
      borderLeftWidth: this.size,
    };
    const triangleClasses = classNames({
      [styles.triangle]: true,
      [styles[`rotate${this.rotation}`]]: true,
    });

    return (
      <div style={style} className={triangleClasses}/>
    );
  }
}

export default Triangle;
