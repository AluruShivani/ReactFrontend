import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Login successful!');
    navigate('/home'); // navigate to products


  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Login</h2>
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="form-control mb-3"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          className="form-control mb-3"
          value={user.mobile}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
