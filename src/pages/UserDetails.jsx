import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', mobile: '' });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdate = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = editedUser;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditingIndex(null);
    alert('User updated successfully!');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Registered Users</h2>
      {users.length === 0 ? (
        <div className="alert alert-warning text-center">No users found.</div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editedUser.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        value={editedUser.mobile}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleUpdate(index)}
                      >
                        Update
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.mobile}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDetails;
