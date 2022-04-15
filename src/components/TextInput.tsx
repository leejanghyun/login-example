import { ReactElement, PropsWithChildren, forwardRef, Ref } from 'react';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { INPUT_DEFAULT } from '@/styles/textInputStyles';

type TextInputType = 'text' | 'password';

interface TextInputProps {
  style: SerializedStyles;
  type: TextInputType;
  placeholder: string;
  name: string;
  required: boolean;
}

type TextInputOptionProps = Partial<TextInputProps>;

/**
 * TextInput Component 정의
 */
const TextInput = (
  {
    children,
    style,
    type = 'text',
    placeholder = '',
    name = '',
    required = false,
  }: PropsWithChildren<TextInputOptionProps>,
  ref: Ref<HTMLInputElement>
): ReactElement => {
  const TextInput = styled.input`
    ${INPUT_DEFAULT}
    ${style}
  `;
  return (
    <TextInput ref={ref} type={type} placeholder={placeholder} name={name} required={required}>
      {children}
    </TextInput>
  );
};

export default forwardRef(TextInput);
