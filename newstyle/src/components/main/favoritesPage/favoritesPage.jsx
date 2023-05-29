import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { salePercentage, colorMap } from '../../constants';
import { faTrash }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../header/headerDesktop/header';
import Footer from '../../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import ProductItem from '../productPage/productItem';

import './favorite.css'

function FavoritesPage() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchFavoriteItems();
  }, []);

  const fetchFavoriteItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/favorites/items');
      const data = await response.json();
      setFavoriteItems(data);
    } catch (error) {
      console.error('Error fetching favorite items:', error);
    }
  };

  const clearFavorites = async (product) => {
    try {
      await fetch(`http://localhost:8080/api/favorites/${product.id}`, { method: 'DELETE' });
      const updatedFavoriteItems = favoriteItems.filter(item => item.id !== product.id);
      setFavoriteItems(updatedFavoriteItems);
      console.log('Favorite item cleared.');
    } catch (error) {
      console.error('Error clearing favorite item:', error);
    }
  };
  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response data:', data);
          if (data.isAuthenticated) {
            setIsAuthenticated(true);
          }
        })
        .catch(error => {
          console.error('Error authenticating:', error);
        });
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Breadcrumbs/>
        <div className='noAccess'>Войдите, чтобы просмотреть избранное.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Breadcrumbs/>
      <div className="card">
      {favoriteItems.length > 0 ? (
        <>
        <h1>Избранное</h1>
        <div className="favorite-card">
          {favoriteItems.map((product) => (
            <div className="profile-card">
              <ProductItem
                product={product}
                salePercentage={salePercentage}
                colorMap={colorMap}
                showDescription={false}
                showButtons={false}
              />
              <div className="favorite-cardBtn">
                  <Button className='card-btn' onClick={() => clearFavorites(product)}>
                  <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                  </Button>
                  </div>
            </div>
          ))}
          </div>
        </>
      ) : (
        <div className='noAccess'>Вы еще не добавили товар в избранное</div>
      )}
      </div>
            
      <Footer />
    </>
  );
}

export default FavoritesPage;