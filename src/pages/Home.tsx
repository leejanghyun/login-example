import { MouseEvent, useState } from 'react';
import styled from '@emotion/styled';
import Button from '@/components/Button';
import { LineHeight } from '@/constants/typography';
import Modal from '@/components/Modal';

/**
 * Home Page
 */
const Home = () => {
  const [isShowModal, setModal] = useState(false);

  /**
   * 새 창 열기 버튼 클릭시
   */
  const onClickNewWindow = () => {
    setModal(true);
  };

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    setModal(false);
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Button onClick={onClickNewWindow}>Open Window</Button>
          <Modal onClose={onClose} visible={isShowModal}>
            <div></div>
          </Modal>
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
