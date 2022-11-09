import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../../../js/Action/actionOrder'

import livrerImg from "../../../assets/livrer.png"
import cancelImg from "../../../assets/cancel.png"

const Order = ({order, i}) => {
  const dispatch = useDispatch()
  const [livrer, setLivrer] = useState(order.livrer)
  const [cancel, setCancel] = useState(order.cancel)
    return (
      <tbody className={cancel && "cancel"}>
        <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0" >{order.orderUser.firstName}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{
        order.product.length > 0 ? order.product.reduce((a,b)=>{return a.productName+" , " +b.productName},'' ) : order.product[0].productName
        }</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{
        order.product.length > 0 ? order.product.reduce((a,b)=>{return a.productPrice + b.productPrice},0 ) : order.product[0].productPrice
        }</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{order.createdAt}</h5>
      </td>
      <td>
        {!cancel &&
          <h5 className="font-medium mb-0"><img src={livrerImg} alt="livrer" style={{width:"35px",cursor:"pointer"}} onClick={()=>{dispatch(updateOrder(order._id,{livrer : true}));setLivrer(true)}}/></h5>}
      </td>
      <td>
        {!livrer &&
          <h5 className="font-medium mb-0"><img src={cancelImg} alt="cancel" style={{width:"35px",cursor:"pointer"}} onClick={()=>{dispatch(updateOrder(order._id,{cancel : true}));setCancel(true)}}/></h5>}
      </td>
      <td>
        <h5 className="font-medium mb-0">{livrer && <span className="dot">Yes</span> }
        {cancel &&
        <span className="dot1">No</span>}</h5>
      </td>
    </tr>
    </tbody>
    )
}

export default Order
