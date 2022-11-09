import React from 'react'
import { useDispatch } from "react-redux";

import { deleteProduct } from '../../../js/Action/actionProduct'
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Product = ({product, i}) => {
  const dispatch = useDispatch()
  
    return (
      <tbody>
        <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0" >{product.productName}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{product.productDesc}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{product.productPrice}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{product.productQty}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{product.productCategory.categoryName}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{product.like}</h5>
      </td>
      <td style={{display:"flex"}}>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          onClick={()=>dispatch(deleteProduct(product._id))}
        >
          <i className="fa fa-trash"></i>{" "}
        </button>
       <EditProduct product={product} />
       <AddProduct />
      </td>
    </tr>
    </tbody>
    )
}

export default Product
