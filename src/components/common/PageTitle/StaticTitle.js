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
    const { UIStore, title } = this.props;

    return (
      <header className={styles.staticHeader}>
        <AnimatedTitle
          UIStore={UIStore}
          title={title}
          isAnimated={false}
        />
      </header>
    );
  }
}

StaticTitle.propTypes = {
  UIStore: PropTypes.object,
  title: PropTypes.string,
};

export default StaticTitle;
