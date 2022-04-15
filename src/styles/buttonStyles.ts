import { css } from '@emotion/react';
import { MonoColor } from '@/constants/color';
import { FontSize, FontWeight, BorderRadius } from '@/constants/typography';

export const BUTTON_DEFAULT = css`
  background-color: ${MonoColor.MONO_BLACK};
  color: ${MonoColor.MONO_WHITE};
  font-size: ${FontSize.PX_16};
  font-weight: ${FontWeight.REGULAR};
  border-radius: ${BorderRadius.PX_4};
  width: 100%;
  height: 30px;
  cursor: pointer;
`;
