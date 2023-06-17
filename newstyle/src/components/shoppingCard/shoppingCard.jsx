import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash }  from '@fortawesome/free-solid-svg-icons';
import { salePercentage, colorMap } from '../constants';

import NewHeader from '../header/header';
import Footer from '../footer/footer';
import Breadcrumbs from '../main/breadcrumbs/breadcrumbs';

import './shoppingCard.css'

function CartPage() {

  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchCartItems = useCallback(() => {
    fetch('http://localhost:8080/api/cart/items')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error(error));
  }, []);

  const checkAuthentication = useCallback(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      authenticateUser(email, password);
    }
  }, []);

  const authenticateUser = (email, password) => {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCartItems();
      checkAuthentication();
    };
  
    fetchData();
  }, [fetchCartItems, checkAuthentication]);
  

  const clearCart = async () => {
    try {
      await fetch('http://localhost:8080/api/cart/clear', {
        method: 'DELETE',
      });
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };
  
  const removeItem = async (itemId) => {
    try {
      await fetch(`http://localhost:8080/api/cart/items/${itemId}`, {
        method: 'DELETE',
      });
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((totalPrice, item) => {
      if (item.sale) {
        return totalPrice + (item.price * salePercentage) / 100;
      } else {
        return totalPrice + item.price;
      }
    }, 0);
  };
  

  if (!isAuthenticated) {
    return (
      <>
        <NewHeader/>
        <Breadcrumbs/>
        <div className='noAccess'>Войдите, чтобы просмотреть корзину.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NewHeader/>
      <Breadcrumbs  includeCatalog={true}/>
      <div className="card">
      {cartItems.length === 0 ? (
        <div className='noAccess'>Вы еще не добавили товар в корзину</div>
      ) : (
        <>
        <h1 className="card-name">Ваш заказ</h1>
          {cartItems.map(item => (
            <Card className='product-card' key={item.id}>
              <Card.Img className='product-image' variant="top" src={`http://localhost:8080/${item.imagePath}`} />
              <Card.Body className='product-cardbody'>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>
                    <span className="product-color" style={{ backgroundColor: colorMap[item.color] }}></span>
                  </Card.Title>
                <Card.Text>Pазмер: {item.size}</Card.Text>
                <Card.Text>
                  {item.sale ? (
                    <strong>{item.price - (item.price * salePercentage / 100)} грн</strong>
                  ) : (
                    <strong>{item.price} грн</strong>
                  )}
                </Card.Text>
                <Button className="shoppingCard-btn" onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                </Button>
              </Card.Body>
            </Card>
          ))}
          <div className="product-cardbody">
            <Button className="card-btn" onClick={clearCart}> Очистить корзину </Button>
            <h4>К оплате: {getTotalPrice()} грн</h4>
            </div>
        </>
      )}
      </div>
      <Footer/>
    </>
  );
}

export default CartPage;