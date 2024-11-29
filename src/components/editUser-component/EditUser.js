import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../../services/api';
import './editUser.css'; // Import the CSS file

const EditUser = () => {
  const { state } = useLocation();
  const { user } = state;
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data...", formData);
    await updateUser(user.id, formData);
    navigate('/users');
  };

  return (
    <div className="container">

      <table>
      <tr><h2>Edit User</h2></tr>
      <tr>
      <div>

<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label>First Name</label>
    <input
      type="text"
      value={formData.first_name}
      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
    />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input
      type="text"
      value={formData.last_name}
      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
    />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>
  <button type="submit">Save</button>
</form>
</div>

      </tr>
      

      </table>
      

    </div>
  );
};

export default EditUser;
