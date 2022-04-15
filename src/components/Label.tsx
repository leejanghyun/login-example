import { ReactElement, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { LABEL_DEFAULT } from '@/styles/labelStyles';

interface LabelProps {
  style: SerializedStyles;
  text: string;
}

type LabelOptionProps = Partial<LabelProps>;

/**
 * Text Label Component 정의
 */
const TextLabel = ({ children, style, text = '' }: PropsWithChildren<LabelOptionProps>): ReactElement => {
  const Label = styled.label`
    ${LABEL_DEFAULT}
    ${style}
  `;
  return <Label htmlFor={text}>{children}</Label>;
};

export default TextLabel;
