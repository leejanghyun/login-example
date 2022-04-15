export const FONT_FAMILY_SANS_SERIF = 'Spoqa Han Sans Neo, sans-serif' as const;

export const FontSize = {
  PX_10: '10px',
  PX_12: '12px',
  PX_14: '14px',
  PX_16: '16px',
  PX_18: '18px',
  PX_22: '22px',
  PX_32: '32px',
  PX_50: '50px',
  PX_100: '60px',
} as const;

export type FontSizeValue = ObjectValue<typeof FontSize>;

export const FontWeight = {
  REGULAR: 'normal',
  BOLD: 'bold',
} as const;

export type FontWeightValue = ObjectValue<typeof FontWeight>;

export const LineHeight = {
  PX_50: '50px',
  PX_32: '32px',
  PX_28: '28px',
  PX_24: '24px',
  PX_20: '20px',
  PX_18: '18px',
  PX_16: '16px',
  PX_14: '14px',
  PX_11: '11px',
  PX_0: 0,
};

export type LineHeightValue = ObjectValue<typeof LineHeight>;

export const LetterSpacing = {
  DEFAULT: 0,
} as const;

export type LetterSpacingValue = ObjectValue<typeof LetterSpacing>;

export const BorderRadius = {
  PX_32: '32px',
  PX_28: '28px',
  PX_24: '24px',
  PX_20: '20px',
  PX_16: '16px',
  PX_12: '12px',
  PX_8: '8px',
  PX_4: '4px',
  PX_0: 0,
} as const;

export type BorderRadiusValue = ObjectValue<typeof BorderRadius>;
