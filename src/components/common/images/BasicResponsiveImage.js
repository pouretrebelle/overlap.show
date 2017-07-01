import React from 'react';
import PropTypes from 'prop-types';

const BasicResponsiveImage = ({ initialImageUrl, mediaQueries, imageUrls, ...props }) => {
  let sources = mediaQueries.map((query, i) => {
    // if source is an array it contains 1x or 2x sizes
    const source = (imageUrls[i].constructor == Array) ?
      `${imageUrls[i][0]}, ${imageUrls[i][1]} 2x` :
      imageUrls[i];

    return query ? (
      <source media={query} key={i} srcSet={source} />
    ) : '';
  });
  // flip the order because specificity works the opposite way around to css
  sources.reverse();

  return (
    <picture>
      {sources}
      <img src={initialImageUrl} {...props} />
    </picture>
  );
};

BasicResponsiveImage.propTypes = {
  initialImageUrl: PropTypes.string.isRequired,
  mediaQueries: PropTypes.array.isRequired,
  imageUrls: PropTypes.array.isRequired,
};

export default BasicResponsiveImage;
