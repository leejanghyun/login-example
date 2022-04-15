import styled from '@emotion/styled';
import Button from '@/components/Button';
import { LineHeight } from '@/constants/typography';
/**
 * Home Page
 */
const Home = () => {
  /**
   * 새 창 열기 버튼 클릭시
   */
  const onClickNewWindow = () => {
    window.open(location.origin, '_blank');
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Button onClick={onClickNewWindow}>Open Window</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  line-height: ${LineHeight.PX_50};
`;

export default Home;
