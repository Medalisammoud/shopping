import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../js/Action/actionCategory";

const EditCategory = ({category}) => {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [editCategory, setEditCategory] = useState(category);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  
    return (
        <>
       <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          onClick={handleShow}
        >
          <i className="fa fa-edit"></i>{" "}
        </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
               value={editCategory.categoryName}
               onChange={(e)=>setEditCategory({categoryName : e.target.value})}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
                dispatch(updateCategory(category._id,editCategory))
                handleClose();
            }}
          >
            Edit Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditCategory
