import React from "react";
import { Col, Row } from "react-bootstrap";
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
  secondButton,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>{modalBody}</div>
      </Modal.Body>

      <Modal.Footer>
        {secondButton ? (
          <Col style={{ marginLeft: "70%" }}>
            <Button variant="secondary" onClick={handleClose}>
              {textButtonLeft}
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {textButtonRight}
            </Button>
          </Col>
        ) : (
          <Button variant="secondary" onClick={handleClose}>
            {textButtonLeft}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
