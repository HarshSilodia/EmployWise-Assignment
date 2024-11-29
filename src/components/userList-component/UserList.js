import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../../services/api';
import './userList.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers(page);
      setUsers(response.data.data);
    };
    getUsers();
  }, [page]);

  const handleEdit = (user) => {
    navigate(`/edit-user`, { state: { user } });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <div className='table'>
      <tr>
        <h2>User List</h2>
      </tr>

      <tr>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={user.avatar} alt="avatar" width="50" />
                </td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user)} className="btn btn-warning">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </tr>

      <tr>

      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className={`btn btn-secondary ${page === 1 ? 'disabled' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
      </tr>



      </div>
      
    </div>
  );
};

export default UserList;
