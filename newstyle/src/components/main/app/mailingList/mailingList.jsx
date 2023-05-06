import React from "react";
import { useState } from 'react';
import EmailModale from "../../../modal/modalElement/emailModal";
import { Button} from "react-bootstrap";

import './mailingList.css'

function MailingList () {

    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };


    return(
        <div className="mailingList-container">
            <h2>РАССКАЖЕМ О СКИДКАХ</h2>
            <div>
                <EmailModale />
                <div className="checkbox-wrapper" onClick={handleClick}>
                    <input type="checkbox" className="checkbox-input" value="Remember me" />
                    <label className="checkbox-label">я согласен(а) с условием политики конфнфедециальности</label>
                </div>
            </div>
            <Button className="mailingList-btn">Подписаться</Button>    
        </div>
    );
}

export default MailingList