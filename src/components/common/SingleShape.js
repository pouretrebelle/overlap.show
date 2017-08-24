import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SingleShape.module.styl';

import { randomAccentColor } from '../../utils/uiUtils';
import { randomXPosition } from '../../utils/uiUtils';
import { randomYPosition } from '../../utils/uiUtils';

class SingleShape extends Component {

  constructor(props) {
    super(props);
    this.color = randomAccentColor(
      props.useWhite,
      props.usePrimary,
      props.useSecondary,
    );
    this.positionX = (this.props.x !== undefined) ? this.props.x : randomXPosition();
    this.positionY = (this.props.y !== undefined) ? this.props.y : randomYPosition();
  }

  render() {
    const {
      children,
      zIndex,
      style,
      useWhite, // eslint-disable-line no-unused-vars
      usePrimary, // eslint-disable-line no-unused-vars
      useSecondary, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;

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
  useWhite: PropTypes.bool,
  usePrimary: PropTypes.bool,
  useSecondary: PropTypes.bool,
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
  useWhite: true,
  usePrimary: true,
  useSecondary: true,
};

export default SingleShape;
