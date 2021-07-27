import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';

export default function ModalEventCard({ heading, body }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal onHide={handleClose} backdrop="static" id="eventModal">
7      <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
8      <Modal.Body>{body}</Modal.Body>
9      <Modal.Footer><button type="button" variant="secondary" class="btn btn-default" onClick={handleClose}>Close</button></Modal.Footer>
10  </Modal>
  );
}