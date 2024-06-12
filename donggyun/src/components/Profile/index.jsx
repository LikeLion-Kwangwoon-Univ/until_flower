import axios from 'axios';
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
    <>
      {users.map((user) => (
        <div key={user.id}>{user.id}</div>
      ))}
    </>
  );
};

export default Profile;
