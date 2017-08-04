import { CLOUDINARY_URL } from '../constants/urls';

export const buildCloudinaryImageUrl = (path, options) => {
  let params = [];
  for (var key in options) {
    params.push(`${key}_${options[key]}`);
  }

  const finalUrl = `${CLOUDINARY_URL}/${params.join(',')}/${path}`;
  if (finalUrl.indexOf('http') === 0) {
    return finalUrl;
  } else if (finalUrl.indexOf('//') === 0) {
    return `https:${finalUrl}`;
  } else {
    return `https://${finalUrl}`;
  }
};

export const constructResponsiveImageDimensions = (breakpoints, width, height, aspectRatio) => {
  let breakpointWidths = [];
  let breakpointHeights = [];

  // booleans for whether dimensions are defined for each breakpoint
  const hasWidthArray = (width && width.constructor === Array) ? true : false;
  const hasHeightArray = (height && height.constructor === Array) ? true : false;
  const hasAspectRatioArray = (aspectRatio && aspectRatio.constructor === Array) ? true : false;

  breakpoints.forEach((size, i) => {
    if (hasWidthArray && width[i]) {
      // if current index exists in width array
      breakpointWidths.push(width[i]);
    }
    else if (hasWidthArray) {
      // use last of width array if it has an array
      breakpointWidths.push(width[width.length - 1]);
    }
    else if (width) {
      // otherwise use the breakpoint size
      breakpointWidths.push(height);
    }
    else {
      // otherwise use the breakpoint size
      breakpointWidths.push(size);
    }

    if (height) {
      if (hasHeightArray && height[i]) {
        // if current index exists in height array
        breakpointHeights.push(height[i]);
      }
      else if (hasHeightArray) {
        // use last of height array if it has an array
        breakpointHeights.push(height[height.length - 1]);
      }
      else {
        // otherwise use the exact height
        breakpointHeights.push(height);
      }
    }

    else if (aspectRatio) {
      if (hasAspectRatioArray && aspectRatio[i]) {
        // if current index exists in aspectRatio array
        breakpointHeights.push(breakpointWidths[i] * aspectRatio[i]);
      }
      else if (hasAspectRatioArray) {
        // use last of aspectRatio array if it has an array
        breakpointHeights.push(breakpointWidths[i] * aspectRatio[aspectRatio.length - 1]);
      }
      else {
        // otherwise use the exact aspectRatio
        breakpointHeights.push(breakpointWidths[i] * aspectRatio);
      }
    }
  });

  return {
    widths: breakpointWidths,
    heights: breakpointHeights,
  };
};
