import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal'
import FooterModale from '../modalElement/footerModale';
import EmailModale from '../modalElement/emailModal'
import SecondModal from './madalRegistrationStep2'; 
import PasswordModale from '../modalElement/passwordModal';

const ModalRegistration = ({ showModal, handleCloseModal }) => {
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleOpenSecondModal = async () => {
        try {
            // Исправляем URL для запроса
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.message);
            }

            if (response.ok) {
                // Сначала открываем второе модальное окно
                setShowSecondModal(true);
                // Закрываем первое модальное окно
                handleCloseModal();
            } else {
                const errorData = await response.json();
                // Добавляем более подробное описание ошибки в вывод
                console.error('Ошибка при регистрации пользователя:', errorData.message);
                // Заменяем alert на вывод ошибки в модальном окне
                alert('Произошла ошибка при регистрации');
            }
        } catch (error) {
            // Добавляем более подробное описание ошибки в вывод
            console.error('Ошибка при регистрации пользователя:', error);
            // Заменяем alert на вывод ошибки в модальном окне
            alert('Произошла ошибка при регистрации');
        }
    };

    const handleCloseSecondModal = () => {
        setShowSecondModal(false);
    };

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <HeaderModal className='modal-title ' title="Регистрация" handleCloseModal={handleCloseModal} />
                <Modal.Body>
                    <EmailModale onChange={setEmail} />
                    <PasswordModale onChange={setPassword} handleTogglePassword={handleTogglePassword} showPassword={showPassword} />
                </Modal.Body>
                <FooterModale title="Продолжить" onClick={handleOpenSecondModal} />
            </Modal>
            <SecondModal showModal={showSecondModal} handleCloseModal={handleCloseSecondModal} />
        </>
    );
};

export default ModalRegistration;
