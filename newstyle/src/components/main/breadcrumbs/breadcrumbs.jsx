import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './breadcrumbs.css'

function Breadcrumbs({ includeCatalog, category }) {

  const location = useLocation();
  const segments = location.pathname.split('/').filter((segment) => segment !== '');

  const pathNames = {
    '/': 'Главная',
    '/catalog': 'Каталог',
    '/catalog/sale': 'Скидки',
    '/catalog/new_arrival': 'NEW',
    '/about': 'Про нас',
    '/contact': 'Контакты',
    '/payment': 'Оплата и доставка',
    '/return-conditions': 'Условия возврата',
    '/shoppingCart': 'Корзина',
    '/favorites': 'Избранное',
    '/personalAccount': 'Личный кабинет',
    '/contact/privacy-policy-terms' : 'Политика конфиденциальности',
  };

  if (category) {
    segments.push(category);
  }
  
  const breadcrumbs = [
    <span key="home">
      <Link to="/">Главная</Link>
    </span>,
    ...(includeCatalog
      ? [
          <span key="catalog">
            {<span className="breadcrumb-separator"> &#8250; </span>}
            <Link to="/catalog">Каталог</Link>
          </span>,
        ]
      : []),
    ...segments.map((segment, index) => {
      const segmentPath = `/${segments.slice(0, index + 1).join('/')}`;
      const segmentName = pathNames[segmentPath] || segment;
      return (
        <span key={segmentPath}>
          {<span className="breadcrumb-separator"> &#8250; </span>}
          <Link to={segmentPath}>{segmentName}</Link>
        </span>
      );
    }),
  ];

  return <div className="bredcrumbs">{breadcrumbs}</div>;
}

export default Breadcrumbs;