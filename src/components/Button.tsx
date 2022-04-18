import { ReactElement, PropsWithChildren, MouseEvent } from 'react';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { BUTTON_DEFAULT } from '@/styles/buttonStyles';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  style: SerializedStyles;
  type: ButtonType;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

type ButtonOptionProps = Partial<ButtonProps>;

/**
 * Button Component 정의
 */
const Button = ({
  children,
  onClick,
  style,
  type = 'button',
}: PropsWithChildren<ButtonOptionProps>): ReactElement => {
  const Button = styled.button`
    ${BUTTON_DEFAULT}
    ${style}
  `;
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button;
