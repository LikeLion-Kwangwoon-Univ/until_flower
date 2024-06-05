import { MdOutlineLock } from 'react-icons/md';
import { FiEyeOff } from 'react-icons/fi';
import './style.css';
import * as S from './styled';
import { useEffect, useState } from 'react';

const InputStyled = () => {
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [borderColor, setBorderColor] = useState('#a69ff9');

  const handleChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
  };

  useEffect(() => {
    if (password.length >= 8) setIsDisabled(false);
    else setIsDisabled(true);
  }, [password]);

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

        <S.Helper>{isDisabled && '8글자 이상 입력해주세요.'}</S.Helper>
      </S.PasswordSection>

      <S.LoginBtn disabled={isDisabled}>로그인</S.LoginBtn>
    </S.Container>
  );
};

export default InputStyled;
