import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';

function AddMovie({movies,setmovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  const R1= useRef()
  const R2= useRef()
  const R3= useRef()
  const R4= useRef()

  const AddedMovie=() => {
    setmovies([...movies,{title:R1.current.value,description:R2.current.value,posterURL:R3.current.value,rating:R4.current.value}])

    setShow(false);
}


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasictitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Enter title" ref={R1} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description" ref={R2} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Poster</Form.Label>
        <Form.Control type="Poster" placeholder="Poster" ref={R3}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="Rate" placeholder="Rate" ref={R4}/>
      </Form.Group>
     
    </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddedMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie
