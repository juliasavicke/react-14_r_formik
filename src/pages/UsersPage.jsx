import { useState, useEffect } from 'react';
import SingleUser from '../components/SingleUser';
import { getUsersFromDb } from '../helper/helper';

function UsersPage(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers(searchFor) {
    getUsersFromDb(searchFor).then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      setUsers(dataInJs);
    });
  }
  function handleUsers(e) {
    console.log('eventas === ', e.target.value); //users?q=searchValue
    const searchValue = e.target.value;
    getUsers(searchValue);
  }
  console.log('users ===', users);
  return (
    <div>
      <h1>Users page</h1>

      <input type='text' placeholder='name' onChange={handleUsers} />

      <ul>
        {users.length && users.map((uObj) => <SingleUser userData={uObj} />)}
      </ul>
    </div>
  );
}
export default UsersPage;
