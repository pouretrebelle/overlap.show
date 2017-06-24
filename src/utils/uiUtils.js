import { ACCENT_COLORS } from 'src/constants/ui';
import { randomMinMax } from 'src/utils/numberUtils';

export const getRandomAccentColor = () => (
  ACCENT_COLORS[Math.floor(Math.random()*ACCENT_COLORS.length)]
);

export const getRandomXPosition = () => (
  `${randomMinMax(10, 90)}%`
);

export const getRandomYPosition = () => (
  `${randomMinMax(10, 90)}%`
);
