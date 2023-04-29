import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './headerModal.css'; 

const HeaderModal = ({ title, handleCloseModal }) => {
  return (
    <Modal.Header>
      <div className="closeContainer"> 
          <FontAwesomeIcon
            icon={faTimes}
            className="closeIcon" 
            onClick={handleCloseModal}
          />
        </div>
      <div className="headerContainer"> 
        <div className="titleContainer"> 
          <Modal.Title className="title">{title}</Modal.Title> 
        </div>
      </div>
    </Modal.Header>
  )
}

export default HeaderModal;


