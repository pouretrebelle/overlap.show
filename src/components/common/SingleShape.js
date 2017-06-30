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
    this.positionX = (this.props.x !== undefined) ? this.props.x : randomXPosition();
    this.positionY = (this.props.y !== undefined) ? this.props.y : randomYPosition();
  }

  render() {
    const { children, zIndex, sometimesWhite, style, ...props } = this.props; // eslint-disable-line no-unused-vars

    const mergedStyle = Object.assign((style || {}), {
      color: this.color,
      top: this.positionY,
      left: this.positionX,
      zIndex: zIndex,
    });

    return (
      <figure style={mergedStyle} className={styles.shape} {...props}>
        {children}
      </figure>
    );
  }
}

SingleShape.propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number,
  sometimesWhite: PropTypes.bool,
  style: PropTypes.object,
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
