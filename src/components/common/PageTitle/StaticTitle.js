import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import styles from './PageTitle.styl';

import TitleWrapper from './TitleWrapper';
import PageTitle from '.';
import Underlay from './Underlay';

@inject('UIStore') @observer
class StaticTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { UIStore } = this.props;

    return (
      <header className={styles.staticHeader}>
        <TitleWrapper UIStore={UIStore} zIndex={-1} isAnimated={false}>
          <Underlay />
        </TitleWrapper>
        <TitleWrapper UIStore={UIStore} zIndex={1} isAnimated={false}>
          <PageTitle />
        </TitleWrapper>
      </header>
    );
  }
}

StaticTitle.propTypes = {
  UIStore: PropTypes.object,
};

export default StaticTitle;
