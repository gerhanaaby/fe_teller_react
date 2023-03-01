import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({
  show,
  handleClose,
  handleSubmit,
  modalHeader,
  modalBody,
  textButtonLeft,
  textButtonRight,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{modalBody}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {textButtonLeft}
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {textButtonRight}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
