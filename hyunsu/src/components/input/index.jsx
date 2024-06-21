import { CiLock } from 'react-icons/ci';
import { FaEyeSlash } from 'react-icons/fa';
import './style.css';
import { useEffect, useState } from 'react';

function Input() {
  const [pw, setPw] = useState('');
  const [isError, setIsError] = useState(true);
  const handlePw = (e) => setPw(e.target.value);

  useEffect(() => {
    if (pw.length >= 8) setIsError(false);
    else setIsError(true);
  });

  return (
    <form className="input_pw">
      <div className="input_label_box">
        <p className="input_label">Password</p>
        <div className="pw_box">
          <CiLock size={20} className="pw_clock" color="grey" />
          <input
            type="password"
            onChange={handlePw}
            className="pw_box_content"
            id="password"
            value={pw}
          />
          <FaEyeSlash size={20} color="grey" />
        </div>
        <p className="pw_box_error">{isError && '8글자 이상 입력해주세요.'}</p>
      </div>

      <button className="login_box">로그인</button>
    </form>
  );
}

export default Input;
