import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const EmailModale = ({ onChange }) => {
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    if (e.target && e.target.value) {
      const email = e.target.value;
      onChange(email);
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Введите корректный e-mail');
      } else {
        setEmailError('');
      }
    }
  };
  
  

  return (
    <Form.Group controlId="formEmail">
      <Form.Label>Ваш e-mail*</Form.Label>
      <Form.Control
        type="email"
        placeholder="Введите e-mail"
        required
        onChange={handleEmailChange}
        isInvalid={emailError !== ''}
      />
      <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default EmailModale;
