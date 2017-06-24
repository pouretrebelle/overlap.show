export const randomMax = (max) => (
  Math.random()*max
);

export const randomMinMax = (min, max) => (
  min+Math.random()*(max-min)
);
