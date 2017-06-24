import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './ShapeField.styl';

import SingleShape from './SingleShape';
import Rectangle from './shapes/Rectangle';

class ShapeField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const shapes = Array.from({ length: 10 }, (v, k) => (
      <SingleShape zIndex={k}>
        <Rectangle />
      </SingleShape>
    ));

    return (
      <div>
        {shapes}
      </div>
    );
  }
}

export default ShapeField;
