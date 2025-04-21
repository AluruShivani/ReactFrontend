import React from 'react';

const Checkout = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const totalAmount = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity;
  }, 0);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-primary">Checkout</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">Your cart is empty.</div>
      ) : (
        <div className="card shadow p-4">
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item.name}</span>
                <span className="badge bg-secondary">
                  {item.quantity || 1} x ₹{item.price}
                </span>
              </li>
            ))}
          </ul>
          <h4 className="text-end text-success">Total Amount: ₹{totalAmount}</h4>
        </div>
      )}
    </div>
  );
};

export default Checkout;
