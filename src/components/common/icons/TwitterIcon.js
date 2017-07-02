import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({ className }) => (
  <svg className={className} version='1.1' viewBox='0 0 100 100'>
    <title>Twitter Icon</title>
    <path d='M97.3,13.2c-4,2.3-8.4,4-13,4.9c-3.7-4-9.1-6.5-14.9-6.5c-11.3,0-20.5,9.2-20.5,20.5c0,1.6,0.1,3.2,0.5,4.7 c-17-0.9-32.1-9.1-42.2-21.4c-1.7,2.9-2.8,6.5-2.8,10.3c0,7.1,3.6,13.3,9.1,17c-3.5-0.1-6.5-0.9-9.3-2.5c0,0.1,0,0.1,0,0.3 c0,10,7.1,18.2,16.4,20.1c-1.7,0.4-3.6,0.7-5.5,0.7c-1.3,0-2.7-0.1-3.9-0.4c2.7,8.1,10.3,14.1,19.2,14.2c-7.1,5.5-15.8,8.8-25.4,8.8 c-1.7,0-3.3-0.1-4.9-0.3c9.1,5.9,19.8,9.2,31.4,9.2c37.7,0,58.3-31.3,58.3-58.3c0-0.9,0-1.7,0-2.7c4-2.9,7.5-6.5,10.3-10.4 c-3.6,1.6-7.6,2.7-11.7,3.2C92.5,22,95.9,18,97.3,13.2z'/>
  </svg>
);

TwitterIcon.propTypes = {
  className: PropTypes.string,
};

export default TwitterIcon;