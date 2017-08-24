import { ACCENT_COLORS } from '../constants/ui';
import { randomMax } from './numberUtils';

export const randomAccentColor = (white = false, primary = true, secondary = false) => {
  const possColors = [];
  if (white) possColors.push('#FFFFFF');
  if (primary) possColors.push(ACCENT_COLORS[0], ACCENT_COLORS[0]);
  if (secondary) possColors.push(ACCENT_COLORS[1], ACCENT_COLORS[1]);

  return possColors[Math.floor(Math.random()*possColors.length)];
};

export const randomXPosition = () => (
  `${randomMax(100)}%`
);

export const randomYPosition = () => (
  `${randomMax(100)}%`
);
