import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap';
import HeaderModal from '../modalElement/headerModal'
import FooterModale from '../modalElement/footerModale';
import EmailModale from '../modalElement/emailModal'
import PasswordModale from '../modalElement/passwordModal'
import ModalRegistration from '../modalAccount/modalRegistrationStep1';

const ModalAuthorization = ({ showModal, handleCloseModal, handleForgotPassword, handleRegister }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleOpenRegistrationModal = () => {
        setShowRegistrationModal(true);
    }

    const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false);
    }

    const handleSubmit = async () => {
        try {
            const requestOptions = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await requestOptions.json(); 
            if (!requestOptions.ok) {
                throw new Error(data.message);
            } else {
                handleCloseModal(); 
            }  
        } catch (error) {
            console.error('Произошла ошибка при авторизации:', error);
            alert('Произошла ошибка при авторизации');
        }
    }
    
    

    return (
        <>
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
            <ModalRegistration showModal={showRegistrationModal} handleCloseModal={handleCloseRegistrationModal} />
        </>
    );
};

export default ModalAuthorization;
