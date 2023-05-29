import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../header/headerDesktop/header';
import Footer from '../../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

import './personalAccount.css'

function PersonalAccount() {

    const [user, setUser] = useState([]);
    const { pathname } = useLocation();
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const email = localStorage.getItem('email'); 

      if (email) {
        fetch(`http://localhost:8080/api/client/${email}`)
          .then(response => response.json())
          .then(data => {
            setUser(data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/';
      }; 

/*function handleLogout() {
  fetch('http://localhost:8080/api/logout', {
    method: 'POST',
    credentials: 'include' 
  })
    .then(response => {
      if (response.ok) {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        setIsAuthenticated(false);
        window.location.href = '/';
      } else {
        throw new Error('Ошибка выхода');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка выхода:', error);
    });
}*/

  
    return (
      <>
        <Header />
        <Breadcrumbs path={pathname}/>
        {user && (
            <div className="card">
                <h1>Персональные данные</h1>
                <p className='profile-info'>Ваш еmail: {email}</p> 
                <p className='profile-info'>Ваш пароль: {password}</p> 
                <div className="profile-card">
                    <button className="card-btn" onClick={handleLogout}>Выйти из аккаунта</button>
                </div>
            </div>
            )}
        <Footer />
      </>
    );
  }
  
  export default PersonalAccount;