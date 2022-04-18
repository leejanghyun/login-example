import styled from '@emotion/styled';
import { MonoColor } from '@/constants/color';
import { FontSize } from '@/constants/typography';
import Loader from '@/components/Loader';

/**
 * Loading Page
 */
const Loading = () => {
  return (
    <Wrapper>
      <div className='message'>Loading...</div>
      <Loader></Loader>
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

export default Loading;
