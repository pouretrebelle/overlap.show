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
