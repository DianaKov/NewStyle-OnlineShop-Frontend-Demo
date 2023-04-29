import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal';
import FooterModale from '../modalElement/footerModale';
import ModalSuccess from './ModalSuccess';
import PasswordModale from '../modalElement/passwordModal';

const ModalResetPassword = ({ show, onClose }) => {
  const [successShown, setSuccessShown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCloseSuccess = () => {
    setSuccessShown(false);
  };

  const handleSuccessButtonClick = () => {
    setSuccessShown(true);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }


  return (
    <>
      <Modal show={show && !successShown} onHide={onClose}>
        <HeaderModal className='modal-title ' title="Сброс пароля" handleCloseModal={onClose} />
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail2">
              <Form.Label>Код из сообщения</Form.Label>
              <Form.Control type="email" placeholder="Код" required />
            </Form.Group>
            <PasswordModale handleTogglePassword={handleTogglePassword} showPassword={showPassword} />
          </Form>
        </Modal.Body>
        <FooterModale title="УСТАНОВИТЬ ПАРОЛЬ" onClick={handleSuccessButtonClick} />
      </Modal>
      {successShown && <ModalSuccess show={true} onClose={handleCloseSuccess} />}
    </>
  );
};

export default ModalResetPassword;
