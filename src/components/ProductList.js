import React, { useEffect } from 'react';
import ProductCard from './ProductCard';

const products = [
  { name: 'Bluetooth Speaker', price: 1500, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9481.jpg?auto=webp&quality=75&width=1024' },
  { name: 'Wrist Watch', price: 2000, image: 'https://www.watchpilot.com/cdn/shop/articles/best-affordable-womens-watches-hero-1920.png?v=1696874433' },
  { name: 'Wireless Headphones', price: 1800, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1741643688482' },
  { name: 'Smartphone', price: 62000, image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202412/19/AceLeaXtntKw1AZf.png' },
  { name: 'DSLR Camera', price: 35000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoulKezHgSklw6Z2TOVueQA6Zasxg0_rpY6w&s' },
];

const ProductList = () => {

  useEffect(() => {
    // Clear cart when component first mounts (i.e. page refresh or load)
    localStorage.removeItem('cart');
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row justify-content-center">
        {products.map((prod, index) => (
          <ProductCard key={index} product={prod} onAdd={addToCart} />
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="/checkout" className="btn btn-info px-4">Purchase</a>
      </div>
    </div>
  );
};

export default ProductList;
