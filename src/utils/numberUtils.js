export const randomMax = (max) => (
  Math.random()*max
);

export const randomMinMax = (min, max) => (
  min+Math.random()*(max-min)
);

export const randomZerodInt = (max) => (
  Math.floor(Math.random()*max)
);

export const getOneOf = (list) => (
  list[randomZerodInt(list.length)]
);

export const clamp = (val, min, max) => (
  Math.min(Math.max(val, min), max)
);

export const map = (val, start, end) => (
  start+val*(end-start)
);
