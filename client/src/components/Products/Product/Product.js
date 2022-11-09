import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InlineShareButtons } from 'sharethis-reactjs';

import "./Product.css";
import like from "../../../assets/like.png";
import like1 from "../../../assets/like1.png";

import { updateProduct } from "../../../js/Action/actionProduct";
import { addPanel } from "../../../js/Action/actionOrder";
import { addFavorite, updateFavorite } from "../../../js/Action/actionFavorite";

const Product = ({ product }) => {
  const [likeShow, setLikeShow] = useState(false);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const favorite = useSelector((state) => state.favoriteReducer.favorite);
  const [findFavorite, setFindFavorite] = useState({})
  const dispatch = useDispatch();
  useEffect(() => {
    setLikeShow(false);
  }, [isAuth]);
  const handleLike = () => {
    favorite.length && setFindFavorite(favorite.find(f => f.favoriteUser._id === user._id));
    if(!likeShow){
      dispatch(updateProduct(product._id, { like: product.like + 1 }))
      !findFavorite ? dispatch(updateFavorite(user._id , { productFavorite : [ ...findFavorite.productFavorite, product]})) : dispatch(addFavorite({ favoriteUser : user._id, productFavorite : [product] }))
    }
    else{
        dispatch(updateProduct(product._id, { like: product.like - 1 }));
      } 
    setLikeShow(!likeShow);
  };
  return (
    <div className="col-md-4">
      <figure className="card card-product">
        <div className="img-wrap">
          <Link to={`/product/${product._id}`}>
            <img src={product.productImage} alt={product.productName} />
          </Link>
        </div>
        <figcaption className="info-wrap">
          <h4 className="title">{product.productName}</h4>
          <p className="desc">
           
          </p>
          <div className="rating-wrap">
            <div className="label-rating">{product.like} Likes</div>
            
           {isAuth &&
            <div className="label-rating">
              {likeShow ? (
                <img src={like1} alt="like" onClick={handleLike} />
              ) : (
                <img src={like} alt="like" onClick={handleLike} />
              )}{" "}
            </div>}
          </div>
        </figcaption>

        <div className="bottom-wrap">
          <div className="price-wrap h5">
            <span className="price-new">TND {product.productPrice}</span>
          </div>
          <div>
          <InlineShareButtons
                    config={{
                        alignment: 'center',  // alignment of buttons (left, center, right)
                        color: 'social',      // set the color of buttons (social, white)
                        enabled: true,        // show/hide buttons (true, false)
                        font_size: 16,        // font size for the buttons
                        labels: 'cta',        // button labels (cta, counts, null)
                        language: 'en',       // which language to use (see LANGUAGES)
                        networks: [
                            'linkedin',
                            'twitter',
                            'facebook',
                            'messenger'
                        ],
                        padding: 0,          // padding within buttons (INTEGER)
                        radius: 100,            // the corner radius on each button (INTEGER)
                        show_total: false,
                        size: 40,             // the size of each button (INTEGER)

                        //OPTIONAL PARAMETERS
                        url: window.location.href,
                        image: product.productImage,
                        description: product.productName,
                        title: product.productName,
                        message: 'contact@chnitisoftpro.net',
                        subject: 'contact@chnitisoftpro.net',
                        username: 'chnitisoftpro'
                    }}
                />
          </div>
          <button
            className="btn btn-round btn-danger"
            type="button"
            onClick={() => dispatch(addPanel(product))}
          >
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </figure>
    </div>
  );
};

export default Product;
