import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ className }) => (
  <svg className={className} version='1.1' viewBox='0 0 16 15'>
    <title>Facebook Icon</title>
    <path d='M14.318 0h-12c-.825 0-1.5.675-1.5 1.5v12c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-12c0-.825-.675-1.5-1.5-1.5zm-.75 1.5v2.25h-1.5c-.45 0-.75.3-.75.75V6h2.25v2.25h-2.25v5.25h-2.25V8.25h-1.5V6h1.5V4.125c0-1.425 1.2-2.625 2.625-2.625h1.875z'/>
  </svg>
);

FacebookIcon.propTypes = {
  className: PropTypes.string,
};

export default FacebookIcon;
