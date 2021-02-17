import React from "react";
import { Button, Modal } from "react-bootstrap";

type TProps = {
  show?: boolean;
  handleClose?: any;
  handleSave?: any;
  header: string;
  body: any;
};
const CustomModal: React.FC<TProps> = ({
  show,
  handleClose,
  header,
  body,
  handleSave,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
