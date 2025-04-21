import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center" to="/home">
        <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="Logo" width="40" height="40" className="me-2" />
        <span className="text-dark fs-3">E-Commerce</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/checkout">Checkout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/userdetails">User Details</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
