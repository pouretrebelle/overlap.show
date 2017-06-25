import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SingleShape.styl';

import { randomAccentColor } from 'src/utils/uiUtils';
import { randomXPosition } from 'src/utils/uiUtils';
import { randomYPosition } from 'src/utils/uiUtils';

class SingleShape extends Component {

  constructor(props) {
    super(props);
    this.color = randomAccentColor(this.props.sometimesWhite);
    this.positionX = this.props.x || randomXPosition();
    this.positionY = this.props.y || randomYPosition();
  }

  render() {
    const { children, zIndex, sometimesWhite, ...props } = this.props; // eslint-disable-line no-unused-vars

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
  sometimesWhite: PropTypes.bool,
  x: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  y: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

SingleShape.defaultProps = {
  sometimesWhite: false,
};

export default SingleShape;
