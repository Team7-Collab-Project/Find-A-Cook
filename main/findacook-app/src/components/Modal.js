import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TermsandConditions from './TermsBox';
import CloseButton from 'react-bootstrap/CloseButton';


function ModalWindow({handleSubmit, onShow}) {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic for registering
//     window.location.href = "/login";
//   };

return (
    <>
    <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
    >
        <Modal size="lg" show={!show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id="termsForm" >
            <TermsandConditions handleSubmit={handleSubmit} onShow={onShow}/>  
        </form>
        </Modal.Body>
        
      </Modal>
    </div>
    </>
    );
}

export default ModalWindow