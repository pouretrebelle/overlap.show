import React from 'react';
import PropTypes from 'prop-types';
import '../styles/application.styl';

import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const Template = ({ children }) => (
  <div>
    <Navigation />
    {children()}
    <Footer />
  </div>
);

Template.propTypes = {
  children: PropTypes.func,
};

export default Template;
