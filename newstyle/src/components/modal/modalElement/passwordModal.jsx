import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordModale = ({ onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordValidation = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(password)) {
      setPasswordError('Пароль должен содержать минимум 8 символов, хотя бы одну заглавную букву, одну строчную букву и одну цифру');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    onChange(password);
    handlePasswordValidation(password);
  };

  return (
    <Form.Group controlId="formPassword">
      <Form.Label>Ваш пароль*</Form.Label>
      <div className="password-input-wrapper">
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          placeholder="Введите пароль"
          required
          onChange={handlePasswordChange}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="password-icon"
          onClick={handleTogglePassword}
        />
      </div>
      {passwordError && <div className="invalid-feedback">{passwordError}</div>}
    </Form.Group>
  );
};


export default PasswordModale;
