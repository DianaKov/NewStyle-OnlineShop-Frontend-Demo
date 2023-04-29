// SuccessModal.js
import React from 'react';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal';

const SuccessModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
         <HeaderModal className='modal-title ' title="Регистрация - успешно!" handleCloseModal={handleCloseModal} />
      <Modal.Body>
        <p>Вы успешно зарегистрировались! Приятных покупок!</p>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
