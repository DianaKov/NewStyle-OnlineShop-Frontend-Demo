import React, { useState } from 'react';
import { Nav, Form, Button, Container, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import ModalForgotPassword from './modalPassword/ModalForgotPassword';
import HeaderModal from './modalElement/headerModal'
import FooterModale from './modalElement/footerModale';
import EmailModale from './modalElement/emailModal'
import PasswordModale from './modalElement/passwordModal'
import ModalRegistration from './modalAccount/modalRegistrationStep1';

import './modal.css';

const MyModal = () => {

  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOpenModal = () => {
    const isAuthenticated = localStorage.getItem('email') !== null;
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      window.location.href = '/personalAccount';
    }
  };
  
  const handleCloseModal = () => setShowModal(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleForgotPassword = () => setShowForgotPasswordModal(true);
  const handleForgotPasswordModalClose = () => setShowForgotPasswordModal(false);
  const handleOpenRegistrationModal = () => setShowRegistrationModal(true);
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false);
  
  const handleSubmit = async () => {
    try {
      const requestOptions = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await requestOptions.json();
      console.log('Response data:', data); 
      if (!requestOptions.ok) {
        throw new Error(data.message);
      } else {
        setIsAuthenticated(true);
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', password);
        handleCloseModal();
        window.location.href = '/personalAccount';
      }
    } catch (error) {
      console.error('Произошла ошибка при авторизации:', error);
      alert('Произошла ошибка при авторизации');
    }
  }
  

  return (
    <>
      <Nav.Link href="#" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faUser} />{' '}
        <span className="faUserText">ЛИЧНЫЙ КАБИНЕТ</span>
      </Nav.Link>

      {!showForgotPasswordModal && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <HeaderModal className='modal-title ' title="Авторизация" handleCloseModal={handleCloseModal} />
          <Modal.Body>
              <Form >
                  <EmailModale onChange={setEmail} />
                  <PasswordModale onChange={setPassword} handleTogglePassword={handleTogglePassword} showPassword={showPassword} />
                  <Container className='form-group'>
                      <Form.Text className="text-muted">
                          <Button variant="link" onClick={() => { handleForgotPassword(); }}>
                              Забыли пароль?
                          </Button>
                      </Form.Text>
                      <Form.Text className="text-muted">
                          <Button variant="link" onClick={handleOpenRegistrationModal}>
                              Нет аккаунта?
                          </Button>
                      </Form.Text>
                  </Container>
              </Form>
          </Modal.Body>
          <FooterModale title="Войти" onClick={handleSubmit}/>
        </Modal>
      )}
      <ModalRegistration showModal={showRegistrationModal} handleCloseModal={handleCloseRegistrationModal} />
      <ModalForgotPassword show={showForgotPasswordModal} onClose={handleForgotPasswordModalClose} />
    </>
  );
}

export default MyModal;