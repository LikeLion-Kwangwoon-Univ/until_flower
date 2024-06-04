import { MdOutlineLock } from 'react-icons/md';
import { FiEyeOff } from 'react-icons/fi';
import './style.css';
import { useState } from 'react';

const Input = () => {
  const [password, setPassword] = useState('');
  const handleChange = (e) => setPassword(e.target.value);

  return (
    <form className="input-form">
      <label className="input-label" htmlFor="password">
        Password
      </label>
      <div className="input-box">
        <MdOutlineLock size={18} color="grey" />
        <input
          className="input-content"
          type="password"
          id="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
        />
        <FiEyeOff size={18} color="grey" />
      </div>
      <p className="input-helpler">Helper text</p>
    </form>
  );
};

export default Input;
