import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addOrder } from "../../js/Action/actionOrder";

import "./Panel.css";

const Payment = ({setAlert,payment, setPayment ,newOrder}) => {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handlePayment =()=>{
    setAlert(true);
    dispatch(addOrder(newOrder));
    handleClose();
  }
  
  return (
    <>
      <button
        className="btn btn-lg btn-block btn-success text-uppercase"
        onClick={handleShow}
      >
        Payment
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12">
                <div className="card3 mx-auto">
                  <p className="heading">PAYMENT DETAILS</p>
                  <form className="card-details ">
                    <div className="form-group mb-0">
                      <p className="text-warning mb-0">Card Number</p>{" "}
                      <input
                        type="text"
                        name="card-num"
                        onChange={(e)=>setPayment({...payment,codeCard : e.target.value})}
                        value={payment.codeCard}
                        id="cno"
                        required
                        
                      />{" "}
                      <img
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        width="64px"
                        height="60px"
                        alt="payment"
                      />
                    </div>
                    <div className="form-group">
                      <p className="text-warning mb-0">Name</p>{" "}
                      <input
                        type="text"
                        name="name"
                        onChange={(e)=>setPayment({...payment,name : e.target.value})}
                        value={payment.name}
                        size="17"
                        required
                      />
                    </div>
                    <div className="form-group pt-2">
                      <div className="row d-flex">
                        <div className="col-sm-4">
                          <p className="text-warning mb-0">Expiration</p>{" "}
                          <input
                            type="text"
                            name="exp"
                            onChange={(e)=>setPayment({...payment,expiration : e.target.value})}
                            value={payment.expiration}
                            placeholder="MM/YYYY"
                            id="exp"
                            required
                          />
                        </div>
                        <div className="col-sm-3">
                          <p className="text-warning mb-0">Cvv</p>{" "}
                          <input
                            type="password"
                            name="cvv"
                            onChange={(e)=>setPayment({...payment,cvv : e.target.value})}
                            value={payment.cvv}
                            size="1"
                            minLength="3"
                            maxLength="3"
                            required
                          />
                        </div>
                        <div className="col-sm-5 pt-0">
                          {" "}
                          <button type="button" className="btn btn-primary" onClick={handlePayment}>
                            <i className="fas fa-arrow-right px-3 py-2"></i>
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
