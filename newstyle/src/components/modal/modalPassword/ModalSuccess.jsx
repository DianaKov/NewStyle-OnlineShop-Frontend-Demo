import React from 'react';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal';

const ModalSuccess = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <HeaderModal className='modal-title ' title="Вы успешно сменили пароль!" handleCloseModal={onClose} />
    </Modal>
  );
};

export default ModalSuccess;