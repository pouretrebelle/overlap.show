import { ACCENT_COLORS } from 'src/constants/ui';
import { randomMinMax } from 'src/utils/numberUtils';

export const getRandomAccentColor = () => {
  let color = ACCENT_COLORS[Math.floor(Math.random()*ACCENT_COLORS.length)]
  if (Math.random() < 0.1) color = '#FFFFFF';
  return color
};

export const getRandomXPosition = () => (
  `${randomMinMax(10, 90)}%`
);

export const getRandomYPosition = () => (
  `${randomMinMax(10, 90)}%`
);
