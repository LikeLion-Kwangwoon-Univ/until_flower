import { MdOutlineLock } from 'react-icons/md';
import { FiEyeOff } from 'react-icons/fi';
import './style.css';

const Input = () => {
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
          placeholder="비밀번호를 입력해주세요."
        />
        <FiEyeOff size={18} color="grey" />
      </div>
      <p className="input-helpler">Helper text</p>
    </form>
  );
};

export default Input;
