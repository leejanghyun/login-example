import styled from '@emotion/styled';
import { MonoColor } from '@/constants/color';
import { FontSize } from '@/constants/typography';

/**
 * Error Page
 */
const Error = () => {
  return (
    <Wrapper>
      <div className="message">Error Page</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .message {
    width: 40%;
    height: 30%;
    display: flex;
    justify-content: center;
    font-size: ${FontSize.PX_50};
    color: ${MonoColor.MONO_300};
  }
`;

export default Error;
