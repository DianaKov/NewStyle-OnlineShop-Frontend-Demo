import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

import './footer.css'

function FooterMobile() {
  const [usefulLinksVisible, setUsefulLinksVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);

  const toggleUsefulLinks = () => {
    setUsefulLinksVisible(!usefulLinksVisible);
  };

  const toggleContactInfo = () => {
    setContactInfoVisible(!contactInfoVisible);
  };

  return (
    <footer className='footerMobile'>
     <h4 onClick={toggleUsefulLinks} className={usefulLinksVisible ? 'arrow-up' : 'arrow-down'}>
        ПОЛЕЗНОЕ
      </h4>
      {usefulLinksVisible && (
        <Nav className="footer-links">
          <Nav.Link className="footer-link" href="/about">О нас</Nav.Link>
          <Nav.Link className="footer-link" href="/payment">Оплата и доставка</Nav.Link>
          <Nav.Link className="footer-link" href="/return-conditions">Условия возврата</Nav.Link>
          <Nav.Link className="footer-link" href="/contact">Контакты</Nav.Link>
        </Nav>
      )}
      <h4 onClick={toggleContactInfo} className={contactInfoVisible ? 'arrow-up' : 'arrow-down'}>
        КОНТАКТЫ
      </h4>
      {contactInfoVisible && (
        <>
          <p>Телефон: +380123456789<br/>Viber или Whats App</p>
          <p>Электронная почта - office@newstyle.com.ua</p>
          <p>Instagram - instagram.com/newstyle.official</p>
        </>
      )}
      <p>NEW STYLE 2023</p>
    </footer>
  );
}

export default FooterMobile;