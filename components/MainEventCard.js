import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function MainEventCard({ heading, body, modalBody }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{
          flexBasis: "0.7px",
          border: "1px solid rgb(231, 231, 231)",
          padding: "2.5rem",
          borderRadius: "10px",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={() => setShow(true)}
      >
        <h4>
          <p>{heading}</p>
        </h4>
        <div>
          <p>{body}</p>
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton={true}>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          <p>{modalBody}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
