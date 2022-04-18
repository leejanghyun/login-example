import styled from '@emotion/styled';
import { PropsWithChildren, MouseEvent, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { MonoColor } from '@/constants/color';
import { BorderRadius, FontWeight, Opacity } from '@/constants/typography';
import Portal from '@/components/Portal';

type visibleTypeStyle = {
  visible: boolean;
};

interface ModalProps {
  style?: SerializedStyles;
  visible?: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Modal 컴포넌트
 */
const Modal = ({
  visible = false, // Modal 숨김,보이기
  maskClosable = true, // mask 클릭 시 닫힘 유무
  closable = true, // close button 유무
  children,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  /**
   * Mask 영역 클릭 시
   */
  const onMaskClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    onClose(event);
  };

  /**
   * Close 버튼 클릭 시
   */
  const close = (event) => {
    const keyEvent = event.key;

    if (keyEvent && keyEvent !== 'Enter') {
      return;
    }

    onClose(event);
  };

  return (
    <Portal elementId='modal'>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        visible={visible}
        tabIndex={-1}
        onClick={maskClosable ? onMaskClick : undefined}
      >
        <ModalInner>
          {closable && (
            <CloseButton onClick={close} onKeyDown={close} tabIndex={0}>
              X
            </CloseButton>
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

const fixedStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalWrapper = styled.div<visibleTypeStyle>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 1000;
  overflow: auto;
  outline: 0;
  ${fixedStyles}
`;

const ModalOverlay = styled.div<visibleTypeStyle>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: ${MonoColor.MONO_BLACK};
  opacity: ${Opacity.OPACITY_06};
  z-index: 999;
  ${fixedStyles}
`;

const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${MonoColor.MONO_BLACK};
  font-weight: ${FontWeight.BOLD};
`;

const ModalInner = styled.div`
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${MonoColor.MONO_WHITE};
  border-radius: ${BorderRadius.PX_4};
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 50px;
`;

export default Modal;
