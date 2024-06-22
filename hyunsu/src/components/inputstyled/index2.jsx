import { CiLock } from 'react-icons/ci';
import { FaEyeSlash } from 'react-icons/fa';
import './style.css';
import * as S from './styled';
import { useEffect, useState } from 'react';

function Input() {
  const [pw, setPw] = useState('');
  const [isError, setIsError] = useState(true);
  const handleChangePw = (e) => setPw(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault(); //여기까지가 기본 순서
    console.log(pw); // onsubmit 이 폼이 제출됐을 때
  };

  useEffect(() => {
    if (pw.length >= 8) setIsError(false);
    else setIsError(true);
  }, [pw]);

  return (
    <S.InputPw onSubmit={handleSubmit}>
      <S.InputLabelBox>
        <S.InputLabel>Password</S.InputLabel>
        <S.PwBox>
          <CiLock size={20} className="pw_clock" color="grey" />
          <S.Input
            type="password"
            onChange={handleChangePw}
            id="password"
            value={pw}
          />
          <FaEyeSlash size={20} color="grey" />
        </S.PwBox>
        <S.PwBoxContent>{isError && '8글자 이상 입력해주세요.'}</S.PwBoxContent>
      </S.InputLabelBox>

      <S.LoginBox error={isError}>로그인</S.LoginBox>
    </S.InputPw>
  );
}

export default Input;
