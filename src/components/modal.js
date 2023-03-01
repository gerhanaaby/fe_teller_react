import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalComponent({
  handleClose,
  handleSubmit,
  show,
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
      <Modal.Body>{modalBody}</Modal.Body>
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
