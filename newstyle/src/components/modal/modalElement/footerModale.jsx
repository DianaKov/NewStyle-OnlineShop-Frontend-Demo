import React from 'react';
import { Button, Modal} from 'react-bootstrap';

const FooterModale = ({ title, onClick}) => {
    return(
        <Modal.Footer>
            <Button variant="primary" onClick={onClick}>{title}</Button>
        </Modal.Footer>
    )
}

export default FooterModale;