import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { Modal, Button, Form } from "react-bootstrap";
import { updateUser } from "../../../js/Action/actionUser";

const EditAdmin = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const admin = useSelector((state) => state.userReducer.user);
    const [editAdmin, setEditAdmin] = useState({
      firstName: '',
      lastName: '',
      email : '',
      phone : '',
      image : ''
  });
    const handleClose = () => setShow(false);
    const handleShow = (e) => {e.preventDefault();setShow(true)};
    useEffect(() => {
        setEditAdmin(admin);
      }, [admin]);
    
      const handleChange = (e) => {
        e.preventDefault();
        setEditAdmin({ ...editAdmin, [e.target.name]: e.target.value });
      };
  return (
    <>
    <div className="col-md-2">
        <Button type="submit" className="outline-warning profile-edit-btn" onClick={handleShow}>Edit Admin</Button>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Admin :</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form.Group >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text"
            name="firstName"
            value={editAdmin.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"
            name="lastName"
            value={editAdmin.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"
            name="email"
            value={editAdmin.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text"
            name="phone"
            value={editAdmin.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <FileBase
            type="file"
            multiple={
                false
            } onDone={({ base64 }) => setEditAdmin({ ...editAdmin, image : base64 })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
        <Button variant="primary"
          onClick={() => { dispatch( updateUser(admin._id, editAdmin)); handleClose() }}
          >
          Edit Admin
          </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default EditAdmin;
