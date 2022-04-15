import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MonoColor } from '@/constants/color';
import { FontSize, LineHeight } from '@/constants/typography';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import TextLabel from '@/components/Label';
import { useDispatch } from 'react-redux';
import { requestLogin } from '@/store/features/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);
  /**
   * Login 버튼 클릭 시
   */
  const onClickLogin = async () => {
    const userId = (userIdRef.current as HTMLInputElement).value;
    const password = (passwordRef.current as HTMLInputElement).value;
    const data = await dispatch(requestLogin({ id: userId, password: password }));
    console.log(data);
    if (1) {
      return;
    }

    navigate('/home');
  };

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <div className="line-break">
          <TextLabel text="userid" style={labelStyle}>
            User ID
          </TextLabel>
          <TextInput
            ref={userIdRef}
            type="text"
            placeholder="아이디 입력하시오."
            name="userid"
            required
            style={textInputStyle}
          />
        </div>
        <div className="line-break">
          <TextLabel text="password" style={labelStyle}>
            Password
          </TextLabel>
          <TextInput
            ref={passwordRef}
            style={textInputStyle}
            type="password"
            placeholder="비밀번호 입력하시오."
            name="password"
            required
          />
        </div>
        <div className="line-break">
          <Button type="submit" onClick={onClickLogin}>
            Login
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

const labelStyle = css`
  width: 30%;
`;
const textInputStyle = css`
  width: 70%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  margin: 20px;
  margin-bottom: 100px;

  .line-break {
    color: ${MonoColor.MONO_500};
    line-height: ${LineHeight.PX_50};
    font-size: ${FontSize.PX_22};
    height: 50px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FontSize.PX_32};
  margin: 20px;
`;

export default Login;
