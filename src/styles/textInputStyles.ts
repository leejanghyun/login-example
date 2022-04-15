import { css } from '@emotion/react';
import { MonoColor, PrimaryColor } from '@/constants/color';
import { FontSize, FontWeight, BorderRadius } from '@/constants/typography';

export const INPUT_DEFAULT = css`
  width: 200px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${FontSize.PX_16};
  font-weight: ${FontWeight.REGULAR};
  border-radius: ${BorderRadius.PX_4};
  color: ${MonoColor.MONO_700};
  caret-color: ${PrimaryColor.PRIMARY_900};
  outline: none;
  box-shadow: inset 0 -3px 0 ${MonoColor.MONO_100};
  outline: none;
  border-width: 0 0;
`;
