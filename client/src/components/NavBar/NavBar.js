import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../js/Action/actionUser";

import "./NavBar.css";
import logo from "../../assets/Logo.jpg"
import panel from "../../assets/panel.png"

const NavBar = ({setInputSearch}) => {
  
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const admin = useSelector(state => state.userReducer.admin)
  const category = useSelector(state => state.categoryReducer.categorys)
  const panelCount = useSelector(state => state.orderReducer.countPanel)
  const [categoryData, setCategoryData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    setCategoryData(category)
  }, [category])
  return (
    <div className="header-blue">
      <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <Link to="/" className="navbar-brand" >
          <img className="logo" src={logo} alt="shopping" />
          Shopping Sport Equipment
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              
            <li className="nav-item" role="presentation">
              <Link to="/"  className="nav-link active">
                  Home
                </Link>
            </li>
            <li className="nav-item" role="presentation">
            <div className="dropdown">
               <span
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </span>
                <div className="dropdown-menu" role="menu">
               {
              categoryData.map(ctg =>
                <Link to={`/${ctg.categoryName}`} key={ctg._id} className="dropdown-item">
                  {ctg.categoryName}
                </Link>)
                }
                </div>
                </div>
                </li>
            </ul>
            <form className="form-inline mr-auto" target="_self">
              <div className="form-group">
                <label >
                  <i className="fa fa-search"></i>
                </label>
                <input
                  className="form-control search-field"
                  type="search"
                  name="search"
                  id="search-field"
                  onChange={(e)=>setInputSearch(e.target.value)}
                />
              </div>
            </form>
            <div className="panel" >
            <Link to="/panel">
              <img src={panel} alt="panel" />
            </Link>
            <span className="countPanel">{panelCount}</span>
            </div>
            {
              isAuth ?  
            <div className="dropdown">
               <span
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </span>
                <div className="dropdown-menu" role="menu">
                  <Link to={admin ? "/admin" :"/profile"} className="dropdown-item">
                    My Account
                  </Link>
                  {(isAuth && !admin) &&
                    <Link to="/favorite" className="dropdown-item">
                    Favorite Product
                  </Link>
                  }
                  <Link to="/" className="dropdown-item" onClick={()=>{dispatch(logout())}}>
                    Logout
                  </Link>
                </div>
            </div>
            :
            <>
            <span className="navbar-text">
            <Link to="/signin"  className="login">
              Log In
            </Link>
          </span>
          <Link to="/signup"  className="btn btn-light action-button" role="button">
            Sign Up
          </Link>
          </>
            }
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
