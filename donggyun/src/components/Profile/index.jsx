import axios from 'axios';
import * as S from './style';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch {
      console.error('데이터 가져오기 실패');
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <S.Container>
      {users.map((user) => (
        <S.BoxProfile key={user.id}>
          <p>name : {user.name}</p>
          <p>company : {user.company.name}</p>
          <p>phone : {user.phone}</p>
        </S.BoxProfile>
      ))}
    </S.Container>
  );
};

export default Profile;
