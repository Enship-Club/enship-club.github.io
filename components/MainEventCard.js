import React from 'react';
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import handleShow from "/components/ModalEventCard";

export default function MainEventCard({ heading, body, ModalHeading, Description }) {
  return (
    <div style={{flexBasis:"0.7px",border:"1px solid #333",padding:"2.5rem", borderRadius: "10px"}} onClick={openModal}>
      <h5><a target="_blank">{heading}</a></h5><div><p>{body}</p></div>
    </div>
  );
  function openModal(){
  render() ;{
    <Modal backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{ModalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{Description}</Modal.Body>
      <Modal.Footer><button type="button" variant="secondary" class="btn btn-default">Close</button></Modal.Footer>
    </Modal>
  }
}}
