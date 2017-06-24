import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SingleShape.styl';

import { getRandomAccentColor } from 'src/utils/uiUtils';
import { getRandomXPosition } from 'src/utils/uiUtils';
import { getRandomYPosition } from 'src/utils/uiUtils';

class SingleShape extends Component {

  constructor(props) {
    super(props);
    this.color = getRandomAccentColor();
    this.positionX = this.props.x || getRandomXPosition();
    this.positionY = this.props.y || getRandomYPosition();
  }

  render() {
    const { children, zIndex, ...props } = this.props;

    const style = {
      color: this.color,
      top: this.positionY,
      left: this.positionX,
      zIndex: zIndex,
    };

    return (
      <figure style={style} className={styles.shape} {...props}>
        {children}
      </figure>
    );
  }
}

SingleShape.propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default SingleShape;
