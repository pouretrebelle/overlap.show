import React from 'react';
import PropTypes from 'prop-types';

import { buildCloudinaryImageUrl, constructResponsiveImageDimensions } from 'src/utils/imageUtils';
import { RESPONSIVE_IMAGE_SIZES } from 'src/constants/ui';

import BasicResponsiveImage from 'src/components/common/images/BasicResponsiveImage';

const buildMediaQueryUrls = (imagePath, minWidth, options, retinaOptions) => {
  // if there's no minWidth leave a blank media query
  return {
    mediaQuery: minWidth ? `(min-width: ${minWidth}px)` : '',
    urls: [
      buildCloudinaryImageUrl(imagePath, options),
      buildCloudinaryImageUrl(imagePath, retinaOptions),
    ],
  };
};

const ResponsiveImage = ({ imagePath, imageQuality, aspectRatio, width, height, breakpoints, maxBreakpoint, fit, focus, ...props }) => {
  let imageSizes = [];

  // use breakpoints from contants file if not specified, creating a new copy to avoid mutation
  breakpoints = (breakpoints || RESPONSIVE_IMAGE_SIZES).slice();

  if (maxBreakpoint) {
    if (breakpoints.indexOf(maxBreakpoint) != -1) {
      // maxBreakpoint is in breakpoint array, just remove latter breakpoints
      breakpoints.splice(breakpoints.indexOf(maxBreakpoint) + 1);
    }
    else {
      // otherwise add to array
      breakpoints.push(maxBreakpoint);
      // sort breakpoints by value
      breakpoints.sort((a, b) => (a - b));
      // and remove everything after the maxBreakpoint
      breakpoints.splice(breakpoints.indexOf(maxBreakpoint) + 1);
    }
  }

  const breakpointDimensions = constructResponsiveImageDimensions(breakpoints, width, height, aspectRatio);
  const breakpointWidths = breakpointDimensions.widths;
  const breakpointHeights = breakpointDimensions.heights;

  breakpoints.forEach((size, i) => {
    const minWidth = breakpoints[i-1] || undefined;

    // make options array for Cloudinary api
    const options = {
      w: Math.min(breakpointWidths[i], 4000),
      q: imageQuality || 'auto',
    };
    // if height exists round it
    if (breakpointHeights[i]) options.h = Math.min(Math.round(breakpointHeights[i]), 4000);
    // unless specified fit is scale
    if (fit) options.c = fit;
    // add focus, should be underscore delimited
    if (focus) options.g = focus.replace(' ', '_');

    // double the dimensions for retina display
    // if width would go over 4000 then cap and restrain ratio
    const retinaRatio = (options.w < 2000) ? 2 : 4000 / options.w;
    let retinaDimensions = {
      w: options.w * retinaRatio,
    };
    if (options.h) retinaDimensions.h = Math.round(options.h * retinaRatio);
    const retinaOptions = Object.assign({}, options, retinaDimensions);

    // add to imageSizes
    imageSizes.push(buildMediaQueryUrls(imagePath, minWidth, options, retinaOptions));

  });

  const mediaQueries = imageSizes.map(size => (size.mediaQuery));
  const imageUrls = imageSizes.map(size => (size.urls));

  return (
    <BasicResponsiveImage
      key={imageUrls[0][0]}
      initialImageUrl={imageUrls[0][0]}
      mediaQueries={mediaQueries}
      imageUrls={imageUrls}
      {...props}
    />
  );
};

ResponsiveImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageQuality: PropTypes.number,
  aspectRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  breakpoints: PropTypes.array,
  maxBreakpoint: PropTypes.number,
  fit: PropTypes.string,
  focus: PropTypes.string,
};

export default ResponsiveImage;
