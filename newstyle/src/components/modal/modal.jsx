import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ModalAuthorization from './modalAuthorization/ModalAuthorization'; // Импорт компонента ModalAuthorization
import ModalForgotPassword from './modalPassword/ModalForgotPassword';
import './modal.css';

const MyModal = () => {

  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false); // Состояние для модального окна ModalForgotPassword

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleForgotPasswordModalClose = () => {
    setShowForgotPasswordModal(false);
  };

  const handleRegister = () => {
    console.log('Регистрация пользователя');
  };

  return (
    <>
      <Nav.Link href="#" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faUser} />{' '}
        <span className="faUserText">ЛИЧНЫЙ КАБИНЕТ</span>
      </Nav.Link>

      {!showForgotPasswordModal && (
        <ModalAuthorization
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleTogglePassword={handleTogglePassword}
          handleForgotPassword={handleForgotPassword}
          handleRegister={handleRegister}
        />
      )}

      <ModalForgotPassword
        show={showForgotPasswordModal}
        onClose={handleForgotPasswordModalClose} 
      />
    </>
  );
}

export default MyModal;