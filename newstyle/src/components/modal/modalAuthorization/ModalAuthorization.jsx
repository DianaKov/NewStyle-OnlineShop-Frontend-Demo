import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal'
import FooterModale from '../modalElement/footerModale';
import EmailModale from '../modalElement/emailModal'
import PasswordModale from '../modalElement/passwordModal'
import ModalRegistration from '../modalAccount/modalRegistrationStep1';

const ModalAuthorization = ({ showModal, handleCloseModal, handleForgotPassword, handleRegister }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false); // Добавлено состояние для отображения/скрытия модального окна "Регистрация"

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleOpenRegistrationModal = () => {
        setShowRegistrationModal(true);
        handleCloseModal(); // Закрытие модального окна "Авторизация"
    }

    const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false);
    }

    return (
        <>
            {/* Модальное окно "Авторизация" */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <HeaderModal className='modal-title ' title="Авторизация" handleCloseModal={handleCloseModal} />
                <Modal.Body>
                    <Form>
                        <EmailModale />
                        <PasswordModale handleTogglePassword={handleTogglePassword} showPassword={showPassword} />
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
                <FooterModale title="Войти" />
            </Modal>

            {/* Модальное окно "Регистрация" */}
            <ModalRegistration showModal={showRegistrationModal} handleCloseModal={handleCloseRegistrationModal} />
        </>
    );
};

export default ModalAuthorization;
