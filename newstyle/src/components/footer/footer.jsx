import React from 'react';
import logo from './img/Logo.png';
import { Nav} from "react-bootstrap";

import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
        <p>NEW STYLE 2023</p>
      </div>
      <div className="footer-center">
        <h4>ПОЛЕЗНОЕ</h4>
        <Nav className="footer-links">
          <Nav.Link className="footer-link" href="#">О нас</Nav.Link>
          <Nav.Link className="footer-link" href="#">Оплата и доставка</Nav.Link>
          <Nav.Link className="footer-link" href="#">Условия возврата</Nav.Link>
          <Nav.Link className="footer-link" href="#">Контакты</Nav.Link>
        </Nav>
      </div>
      <div className="footer-right">
        <h4>ВАС ЗАИНТЕРЕСОВАЛ ИНТЕРНЕТ-МАГАЗИН?<br/> СВЯЖИТЕСЬ С НАМИ</h4>
        <p>Телефон: +380123456789<br/>Viber или Whats App</p>
        <p>Электронная почта - office@newstyle.com.ua</p>
        <p>Instagram - instagram.com/newstyle.official</p>
      </div>
    </footer>
  );
}

export default Footer;
