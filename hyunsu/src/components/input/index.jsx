import { CiLock } from 'react-icons/ci';
import { FaEyeSlash } from 'react-icons/fa';
import './style.css';
import { useEffect, useState } from 'react';

const Input = () => {
  const [pw, setPw] = useState('');
  const [borderColor, setBorderColor] = useState('red');
  const [isError, setIsError] = useState(false);
  const handleChangePw = (e) => setPw(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault(); //여기까지가 기본 순서
    console.log(pw); // onsubmit 이 폼이 제출됐을 때
  };

  useEffect(() => {
    if (pw.length >= 8) setIsError(true);
    else setIsError(false);
    if (pw.length >= 8) setBorderColor(false);
    else setBorderColor(true);
  }, [pw]);

  return (
    <form className="input_pw" onSubmit={handleSubmit}>
      <div className="input_label_box">
        <p className="input_label">Password</p>
        <div className="pw_box">
          {borderColor}
          <CiLock size={20} className="pw_clock" color="grey" />
          <input
            type="password"
            onChange={handleChangePw}
            className="pw_box_content"
            id="password"
            value={pw}
          />
          <FaEyeSlash size={20} color="grey" />
        </div>
        <p className="pw_box_error">{isError && 'Error Message'}</p>
      </div>

      <button className="login_box">로그인</button>
    </form>
  );
};

export default Input;
