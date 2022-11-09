import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../js/Action/actionCategory";
import add from "../../../assets/add.png"

const AddCategory = () => {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [categoryData, setCategoryData] = useState({categoryName : ''});
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setCategoryData({categoryName : ''});
    setShow(true);
  };

  return (
    <>
      <button className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        onClick={handleShow}
      >
        <img className="addimg" src={add} alt="category" />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
               value={categoryData.categoryName}
               onChange={(e)=>setCategoryData({categoryName : e.target.value})}
               required="true"
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
                dispatch(addCategory(categoryData));
                handleClose();
            }}
          >
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCategory;
