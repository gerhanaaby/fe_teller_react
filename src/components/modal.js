import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalComponent({
  handleClose,
  show,
  modalHeader,
  modalBody,
  //onClick,
}) {
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

// const ModalComponent = (show, modalHeader, modalBody) => {
//   const [isShowing, setIsShowing] = useState(false);

//   function toggles() {
//     setIsShowing(!isShowing);
//   }

//   return (
//     <Modal show={show}>
//       <Modal.Header closeButton>
//         <Modal.Title>{modalHeader}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{modalBody}</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={toggles}>
//           Close
//         </Button>
//         <Button variant="primary">Save Changes</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default ModalComponent;
