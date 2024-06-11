import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/input')}>Input</Button>
      <Button onClick={() => navigate('/input-styled')}>Input-Styled</Button>
      <Button onClick={() => navigate('/product')}>Product</Button>
      <Button onClick={() => navigate('/balance')}>Balance</Button>
    </>
  );
};

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #d1e5f9;
`;

export default Main;
