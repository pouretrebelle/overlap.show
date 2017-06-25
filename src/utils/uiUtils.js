import { ACCENT_COLORS } from 'src/constants/ui';
import { randomMax } from 'src/utils/numberUtils';

export const randomAccentColor = () => {
  let color = ACCENT_COLORS[Math.floor(Math.random()*ACCENT_COLORS.length)]
  if (Math.random() < 0.1) color = '#FFFFFF';
  return color
};

export const randomXPosition = () => (
  `${randomMax(100)}%`
);

export const randomYPosition = () => (
  `${randomMax(100)}%`
);
