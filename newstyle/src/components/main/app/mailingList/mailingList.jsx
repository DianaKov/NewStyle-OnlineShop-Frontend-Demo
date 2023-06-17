import React, { useState } from 'react';
import { Form} from "react-bootstrap";
import EmailModale from "../../../modal/modalElement/emailModal";

import './mailingList.css'

function MailingList () {

  const [isChecked, setIsChecked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (email) => {
    console.log(email);
  };

  const handleBtnChange = (email) => {
    if (isChecked && email) {
      console.log(email);
      setIsSubscribed(true);
  
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return(
      <div className="mailingList-container">
        {isSubscribed && (
      <div className="popup">
        <p>Спасибо, что подписались</p>
      </div>
    )}

          <h2>РАССКАЖЕМ О СКИДКАХ</h2>
            <Form className='mailingList-form'>
              <div>
                <EmailModale onChange={handleEmailChange}/>
              <div className="checkbox-wrapper" onClick={handleClick}>
                  <input type="checkbox" className="checkbox-input" value="Remember me" required/>
                  <label className="checkbox-label" >
                    <a href='/contact/privacy-policy-terms'>я согласен(а) с условием политики конфнфедециальности</a>
                  </label>
              </div>
              </div>
              <div className='mailingList-form__btn'>
                <input type='submit' id="submitButton" className="mailingList-btn" value='Подписаться'  onClick={handleBtnChange}/>  
              </div>
          </Form>
      </div>
  );
}

export default MailingList