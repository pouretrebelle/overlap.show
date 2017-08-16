import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TriangleOutline.module.styl';

import { randomMinMax, randomZerodInt } from '../../../utils/numberUtils';

class TriangleOutline extends Component {

  constructor(props) {
    super(props);
    this.size = this.props.size || randomMinMax(80, 250);
    this.rotation = (this.props.rotation !== undefined) ? this.props.rotation : randomZerodInt(4);
  }

  render() {
    const style = {
      width: this.size,
      height: this.size,
    };

    const triangleClasses = classNames({
      [styles.triangle]: true,
      [styles[`rotate${this.rotation}`]]: true,
    });

    return (
      <div className={triangleClasses} style={style}/>
    );
  }
}

TriangleOutline.propTypes = {
  size: PropTypes.number,
  rotation: PropTypes.number,
};

export default TriangleOutline;
