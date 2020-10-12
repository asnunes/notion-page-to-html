export const backgroundColorToHex = (color: string): string => {
  return backgroundColorsToHex[color] || '#FFFFFF';
};

export const foregroundColorToHex = (color: string): string => {
  return foregroundColorTextToHEX[color] || '#37352F';
};

const foregroundColorTextToHEX: Record<string, string> = {
  purple: '#6940A5',
  yellow: '#E9AB01',
  gray: '#9B9A97',
  brown: '#64473A',
  orange: '#D9730D',
  green: '#0F7B6C',
  blue: '#0B6E99',
  pink: '#AD1A72',
  red: '#E03E3E',
  none: '#37352F',
};

const backgroundColorsToHex: Record<string, string> = {
  gray_background: '#E03E3E',
  brown_background: '#E9E5E3',
  orange_background: '#FAEBDD',
  yellow_background: '#FBF3DB',
  green_background: '#DDEDEA',
  blue_background: '#DDEBF1',
  purple_background: '#EAE4F2',
  pink_background: '#F4DFEB',
  red_background: '#FBE4E4',
};
