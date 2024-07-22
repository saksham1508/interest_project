import React, { useEffect, useState } from 'react';
import InterestService from '../services/interestservice';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    InterestService.getUsers().then(response => {
      setUsers(response.data);
    });
  }, []);

  const handleSendInterest = (userId) => {
    InterestService.sendInterest(userId).then(() => {
      alert('Interest sent!');
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} <button onClick={() => handleSendInterest(user.id)}>Send Interest</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
