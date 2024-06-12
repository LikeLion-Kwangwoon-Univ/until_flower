import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const data = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('axios 내부 console', response.data);
      })
      .catch(() => {
        console.log('실패');
      });

    console.log('axios 외부 console', data);
    return data;
  };

  return (
    <>
      <Button onClick={() => navigate('/input')}>Input</Button>
      <Button onClick={() => navigate('/input-styled')}>Input-Styled</Button>
      <Button onClick={() => navigate('/product')}>Product</Button>
      <Button onClick={() => navigate('/balance')}>Balance</Button>

      <Button onClick={handleButtonClick}>데이터 요청</Button>
    </>
  );
};

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #d1e5f9;
`;

export default Main;
