import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Alert } from "react-bootstrap";
import Panel from "./Panel";
import "./Panel.css";
import Payment from "./Payment";

const ListPanel = ({ history }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const products = useSelector((state) => state.orderReducer.products);
  const sumPrice = useSelector((state) => state.orderReducer.sumPrice);
  const user = useSelector(state => state.userReducer.user)
  
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  const [newOrder, setNewOrder] = useState({})
  const [alert, setAlert] = useState(false);
  const [payment, setPayment] = useState({
    userName : "",
    codeCard : "",
    expiration : "",
    cvv : ""
})
   
  setTimeout(() => {
    alert && setAlert(false)
  }, 3000);
  
  useEffect(() => {
    setOrders(products);
  }, [products]);

  useEffect(() => {
    setTotal(sumPrice);
  }, [sumPrice]);
  
  useEffect(() => {
    setNewOrder({
      orderUser : user._id,
      product : orders
    })
  }, [user, orders]);
  
  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">PANEL SHOP</h1>
        </div>
      </section>
      {alert && <Alert type="info" variant='success' style={{width:"60%",marginLeft:"300px"}}>
        {`${payment.name} your Payment is Success with code card ${payment.codeCard} ........`}
      </Alert>}
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <Panel
                      key={order._id}
                      order={order}
                      total={total}
                      setTotal={setTotal}
                    />
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">
                      <strong>{total} TND</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <button
                  className="btn btn-block btn-light"
                  onClick={() => history.goBack()}
                >
                  Continue Shopping
                </button>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                {isAuth ? (
                  <Payment setAlert={setAlert} payment={payment} setPayment={setPayment} newOrder={newOrder} />
                ) : (
                  <Link to="/signup">
                    <button className="btn btn-lg btn-block btn-success text-uppercase">
                      Payment
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPanel;
