import { CiLock } from 'react-icons/ci';
import { FaEyeSlash } from 'react-icons/fa';
import * as S from './styled';
import { useState } from 'react';

function InputStyled() {
  const [pw, setPw] = useState('');
  const [isError, setIsError] = useState(true);
  const handleChangePw = (e) => setPw(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault(); //여기까지가 기본 순서
    // onsubmit 이 폼이 제출됐을 때

    if (pw.length >= 8) {
      setIsError(false);
    } else {
      setIsError(true);
      console.log(pw);
    }
  };

  return (
    <S.InputPw onSubmit={handleSubmit}>
      <S.InputLabelBox>
        <S.InputLabel>Password</S.InputLabel>
        <S.PwBox $isError={isError}>
          <CiLock size={20} className="pw_clock" color="grey" />
          <S.PwBoxContent
            type="password"
            onChange={handleChangePw}
            id="password"
            value={pw}
          />
          <FaEyeSlash size={20} color="gray" />
        </S.PwBox>
        <S.PwBoxError>{isError && '8글자 이상 입력해주세요.'}</S.PwBoxError>
      </S.InputLabelBox>

      <S.LoginBox>로그인</S.LoginBox>
    </S.InputPw>
  );
}

export default InputStyled;
