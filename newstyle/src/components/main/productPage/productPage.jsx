import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../footer/footer';
import Header from '../../header/headerDesktop/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { salePercentage, colorMap } from '../../constants';
import ProductItem from './productItem';

import './productPage.css'
import ViewedProducts from './viewedProducts';

function ProductPage() {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = () => {
    fetch('http://localhost:8080/api/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => {
        if (response.ok) {
          console.log('Товар добавлен в корзину');
          const updatedCartItems = [...cartItems, product];
          setCartItems(updatedCartItems);
          setAddedToCart(true);
        } else {
          throw new Error('Ошибка при добавлении товара в корзину');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${productName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Ошибка при загрузке товара');
        }
      })
      .then(data => {
        setProduct(data);
        const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
  const viewedProduct = {
    imagePath: data.imagePath,
    id: data.id
  };
  console.log(viewedProduct);
  // Проверяем, не содержится ли уже просмотренный товар в localStorage
  if (!viewedProducts.some(product => product.id === viewedProduct.id && product.imagePath === viewedProduct.imagePath)) {
    viewedProducts.push(viewedProduct);
    if (viewedProducts.length > 4) {
      viewedProducts.shift();
    }
    localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
  }
  if (!viewedProducts.includes(product.id)) {
    viewedProducts.push(product.id);
  }
      })
      .catch(error => {
        console.error(error);
      });
  }, [productName]);

  const addToFavorites = () => {
    fetch('http://localhost:8080/api/favorites/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => {
        if (response.ok) {
          console.log('Товар добавлен в избранное');
          const updatedFavoriteItems = [...favoriteItems, product];
          setFavoriteItems(updatedFavoriteItems);
          setAddedToFavorites(true);
        } else {
          throw new Error('Ошибка при добавлении товара в избранное');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Breadcrumbs/>
      <div className='productPage'>
          <ProductItem
            product={product}
            salePercentage={salePercentage}
            colorMap={colorMap}
            showDescription={true}
            showButtons={true}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            addedToCart={addedToCart}
            addedToFavorites={addedToFavorites}
            className="productPage--left"
            className2="productPage--right"
          />
        </div>
        <ViewedProducts />
      <Footer />
    </>
  );
}

export default ProductPage;