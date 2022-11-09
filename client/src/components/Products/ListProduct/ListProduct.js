import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"


import Product from '../Product/Product'
import "./ListProduct.css"




const ListProduct = ({category, inputSearch}) => {
    const products = useSelector(state => state.productReducer.products)
    const [productData, setProductData] = useState([])
    useEffect(() => {
        category ?
        setProductData(products.filter(prd => {return prd.productCategory.categoryName === category}))
        :
        setProductData(products)
    }, [products,category])
    return (
        
        <div className="container">
            <div className="row mt-4 mb-5">
                { !productData.length ? <p style={{ marginTop:'10%', fontSize:"30px" }}>Loading...</p> :
                inputSearch ?
                products.filter(prt=>prt.productName.toLowerCase().includes(inputSearch.toLowerCase()))
                .map(product => <Product key={product._id} product={product} />)
                :
                productData.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default ListProduct
