import React from 'react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ₹{product.price}</p>
          <button className="btn btn-primary mt-auto" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
