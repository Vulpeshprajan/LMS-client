import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CustomModal= ({children}) =>  {
    const [modalShow, setModalShow] = React.useState(true);

  return (
    <Modal
    show={modalShow}
    onHide={() => setModalShow(false)}      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {children}
      </Modal.Body>
      
    </Modal>
  );
}


