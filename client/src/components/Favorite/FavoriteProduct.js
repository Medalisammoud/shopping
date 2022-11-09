import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Products/Product/Product'

const FavoriteProduct = () => {
    const favorite = useSelector(state => state.favoriteReducer.favorite)
    const user = useSelector(state => state.userReducer.user)
    const [favoriteData, setFavoriteData] = useState([])

    useEffect(() => {
        setFavoriteData(favorite)
    }, [favorite])
    return (
        <div className="container">
            <h2 style={{marginLeft:"40%",marginTop:"5%"}}>My Favorite Product</h2>
            <div className="row mt-4 mb-5">
                {!favoriteData.length ? <p style={{ marginTop:'10%', fontSize:"30px" }}>Loading...</p> :
                    favorite.find(f => f.favoriteUser._id === user._id)
                    .productFavorite
                    .map(fproduct => <Product product={fproduct} key={fproduct._id} />)
                }
            </div>
        </div>
    )
}

export default FavoriteProduct
