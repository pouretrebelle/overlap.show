import { ACCENT_COLORS } from 'src/constants/ui';
import { randomMax } from 'src/utils/numberUtils';

export const randomAccentColor = (sometimesWhite) => {
  let color = ACCENT_COLORS[Math.floor(Math.random()*ACCENT_COLORS.length)]
  if (sometimesWhite && Math.random() < 0.2) color = '#FFFFFF';
  return color
};

export const randomXPosition = () => (
  `${randomMax(100)}%`
);

export const randomYPosition = () => (
  `${randomMax(100)}%`
);
