import { MdOutlineLock } from 'react-icons/md';
import { FiEyeOff } from 'react-icons/fi';
import './style.css';
import { useState } from 'react';

const Input = () => {
  const [password, setPassword] = useState('');
  const handleChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="input-password">
        <label className="input-password__label" htmlFor="password">
          Password
        </label>
        <div className="input-password__box">
          <MdOutlineLock size={18} color="grey" />
          <input
            className="input-password__content"
            type="password"
            id="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
          />
          <FiEyeOff size={18} color="grey" />
        </div>
        <p className="input-password__helpler">Helper text</p>
      </div>

      <button className="input-button">로그인</button>
    </form>
  );
};

export default Input;
