// SecondModal.js
import React, { useState } from 'react';
import { Form, Modal} from 'react-bootstrap';
import SuccessModal from './modalRegistrSuccess'; 
import FooterModale from '../modalElement/footerModale';
import HeaderModal from '../modalElement/headerModal';

const SecondModal = ({ showModal, handleCloseModal }) => {
    const [successModalVisible, setSuccessModalVisible] = useState(false); // Состояние для отслеживания видимости нового модального окна
  
    const handleSuccessModalOpen = () => {
      setSuccessModalVisible(true); // Функция для открытия нового модального окна
      handleCloseModal(); // Закрываем текущее модальное окно
    };
  
    const handleSuccessModalClose = () => {
      setSuccessModalVisible(false); // Функция для закрытия нового модального окна
    };
  
    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
        <HeaderModal className='modal-title ' title="Регистрация - шаг 2" handleCloseModal={handleCloseModal} />
          <Modal.Body>
            <p>Мы отправили вам на почту код для подтверждения регистрации. Введите его, пожалуйста</p>
            <Form>
              <Form.Group controlId="emailCode">
                <Form.Label>Код с e-mail*</Form.Label>
                <Form.Control type="text" placeholder="Введите код" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <FooterModale title="ЗАРЕГИСТРИРОВАТЬСЯ" onClick={() => handleSuccessModalOpen(true)} />
        </Modal>
  
        <SuccessModal showModal={successModalVisible} handleCloseModal={handleSuccessModalClose} /> {/* Рендер компонента SuccessModal */}
      </>
    );
  };

export default SecondModal;
