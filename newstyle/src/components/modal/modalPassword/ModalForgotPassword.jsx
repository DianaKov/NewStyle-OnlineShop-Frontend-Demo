import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal';
import EmailModale from '../modalElement/emailModal';
import FooterModale from '../modalElement/footerModale';
import ModalResetPassword from './ModalResetPassword';

const ModalForgotPassword = ({ show, onClose }) => {
  const [resetPasswordModalShow, setResetPasswordModalShow] = useState(false);

  const handleCloseResetPasswordModal = () => {
    setResetPasswordModalShow(false);
  }

  return (
    <>
      <Modal show={show && !resetPasswordModalShow} onHide={onClose}>
        <HeaderModal className='modal-title ' title="Забыли пароль?" handleCloseModal={onClose} />
        <Modal.Body>
          <EmailModale />
        </Modal.Body>
        <FooterModale title="Зарегистрироваться" onClick={() => setResetPasswordModalShow(true)} />
      </Modal>
      {resetPasswordModalShow && <ModalResetPassword show={resetPasswordModalShow} onClose={handleCloseResetPasswordModal} />}
    </>
  );
};

export default ModalForgotPassword;