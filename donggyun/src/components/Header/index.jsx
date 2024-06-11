import * as S from './style';
import { IoIosArrowForward } from 'react-icons/io';

const Header = ({ children }) => {
  return (
    <S.Container>
      {children}
      <IoIosArrowForward />
    </S.Container>
  );
};

export default Header;
