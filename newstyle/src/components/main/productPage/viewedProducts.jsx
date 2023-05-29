import React from 'react';
import { Link } from 'react-router-dom';

function ViewedProducts() {
  const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
  const lastViewedProducts = viewedProducts.slice(-4).reverse(); // Получаем последние 4 просмотренных товара в обратном порядке

  return (
    <div className="card">
      <h1>Просмотренные товары</h1>
      <div className="favorite-card">
        {lastViewedProducts.map((product, index) => (
          <div className="profile-card" key={index}>
            <Link to={`/catalog/${product.id}`}>
              <img src={`http://localhost:8080/${product.imagePath}`} alt="Product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewedProducts;

