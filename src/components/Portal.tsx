import { PropsWithChildren, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  elementId: string;
}

/**
 * Portal 컴포넌트
 */
const Portal = ({ children, elementId }: PropsWithChildren<PortalProps>) => {
  const rootElement = useMemo(() => document.getElementById(elementId) as HTMLElement, [elementId]);
  return createPortal(children, rootElement);
};

export default Portal;
