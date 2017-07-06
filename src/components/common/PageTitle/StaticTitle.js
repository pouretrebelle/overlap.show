import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import styles from './TitleText.styl';

import AnimatedTitle from './AnimatedTitle';

@inject('UIStore') @observer
class StaticTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { UIStore } = this.props;

    return (
      <header className={styles.staticHeader}>
        <AnimatedTitle
          UIStore={UIStore}
          isAnimated={false}
        />
      </header>
    );
  }
}

StaticTitle.propTypes = {
  UIStore: PropTypes.object,
};

export default StaticTitle;
