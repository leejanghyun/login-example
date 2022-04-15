import { css } from '@emotion/react';
import { MonoColor } from '@/constants/color';
import { FontSize, FontWeight } from '@/constants/typography';

export const LABEL_DEFAULT = css`
  color: ${MonoColor.MONO_400};
  font-size: ${FontSize.PX_16};
  display: inline-block;
  width: 100px;
  font-weight: ${FontWeight.BOLD};
`;
