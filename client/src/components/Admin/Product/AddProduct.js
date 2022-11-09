import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, Button, Form } from "react-bootstrap";
import FileBase from "react-file-base64";

import add from "../../../assets/add.png";
import { addProduct } from "../../../js/Action/actionProduct";

const AddProduct = () => {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const categorys = useSelector((state) => state.categoryReducer.categorys);
  const [productData, setProductData] = useState({
    productImage: '',
    productName: "",
    productDesc: "",
    productPrice: 0,
    productCategory: "",
    productQty: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  
  const handleSubmitProduct = (e)=>{
    e.preventDefault();
    // let formData = new FormData();

		// 	formData.append('productImage', productData.productImage);
		// 	formData.append('productName', productData.productName);
		// 	formData.append('productDesc', productData.productDesc);
		// 	formData.append('productPrice', productData.productPrice);
		// 	formData.append('productCategory', productData.productCategory);
		// 	formData.append('productQty', productData.productQty);

			dispatch(addProduct(productData));
            setProductData({
                productImage: null,
                productName: "",
                productDesc: "",
                productPrice: 0,
                productCategory: "",
                productQty: 0,
              })
              handleClose();
  }
  return (
    <>
      <button
        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        onClick={handleShow}
      >
        <img className="addimg" src={add} alt="Product" />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="productDesc"
              value={productData.productDesc}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="Number"
              name="productPrice"
              value={productData.productPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="Number"
              min='0'
			max='1000'
              name="productQty"
              value={productData.productQty}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="productCategory"
              onChange={handleChange}
              required
            >
                <option value=''>
					Choose one...
				</option>
              {categorys &&
                categorys.map((category) => <option key={category._id} value={category._id}>{category.categoryName}</option>
                )}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            {/* <input
			        type='file'
              name='productImage'
              encType="multipart/form-data"
              onChange={handleChange}
            /> */}
            <FileBase
            type="file"
            multiple={
                false
            } onDone={({ base64 }) => setProductData({ ...productData, productImage : base64 })}
        />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmitProduct}
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
