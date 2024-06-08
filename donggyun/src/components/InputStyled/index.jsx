import { MdOutlineLock } from 'react-icons/md';
import { FiEyeOff } from 'react-icons/fi';
import './style.css';
import * as S from './styled';
import { useState } from 'react';

const InputStyled = () => {
  const [password, setPassword] = useState('');
  const [borderColor, setBorderColor] = useState('#a69ff9');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length >= 8) {
      setBorderColor('#a69ff9');
      setIsError(false);
    } else {
      setIsError(true);
      setBorderColor('red');
      console.log(password);
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.PasswordSection>
        <S.Label htmlFor="password">Password</S.Label>

        <S.PasswordBox $borderColor={borderColor}>
          <MdOutlineLock size={18} color="grey" />
          <S.Input
            type="password"
            id="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
          />
          <FiEyeOff size={18} color="grey" />
        </S.PasswordBox>

        <S.Helper>{isError && '8글자 이상 입력해주세요.'}</S.Helper>
      </S.PasswordSection>

      <S.LoginBtn>로그인</S.LoginBtn>
    </S.Container>
  );
};

export default InputStyled;
