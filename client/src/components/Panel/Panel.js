import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductPanel } from "../../js/Action/actionOrder";

const Panel = ({ order,setTotal,total }) => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(0)
  const [oldQty, setOldQty] = useState(qty)
  useEffect(() => {
    if(qty> oldQty) 
    {
      setTotal(total+order.productPrice)
      setOldQty(qty)
    }
    else 
   {
      setTotal(total - order.productPrice)
      setOldQty(qty)
    }
    qty===0 && setQty(1);
  }, [qty])
  return (
    <tr>
      <td>
        <img style={{width:"100px"}} src={order.productImage}
           alt={order.productName} />{" "}
      </td>
      <td>{order.productName}</td>
      <td>{order.productQty>0 ?"In stock" : "Not In Stock"}</td>
      <td>
        <input className="form-control" type="Number" value={qty} min="1" max={order.productQty} onChange={(e)=>setQty(e.target.value)} />
      </td>
      <td className="text-right">{order.productPrice} TND</td>
      <td className="text-right">
        <button className="btn btn-sm btn-danger" onClick={()=>dispatch(deleteProductPanel(order._id , qty))}>
          <i className="fa fa-trash"></i>{" "}
        </button>{" "}
      </td>
    </tr>
  );
};

export default Panel;
