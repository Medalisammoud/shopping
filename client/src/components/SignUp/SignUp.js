import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";

import { signup, videErrors } from "../../js/Action/actionUser";
import Errors from '../Errors/Errors'

import "./SignUp.css";

const SignUp = ({ history }) => {
  const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email : '',
      password : '',
      phone : '',
      image : ''
  })
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  const handleChange = (e)=>{
      setUser({...user, [e.target.name] : e.target.value})
  }
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    }
  }, [dispatch])
  return (
    <div className="container-fluid">
      
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image1"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              { errors.length > 0 && <div style={{display:"flex"}}> {errors.map((el,i) => <Errors key={i} error={el} />)}</div> }
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Register</h3>
                  <form>
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        placeholder="Enter First Name ..."
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        
                      />
                      <label htmlFor="inputFirstName">First Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        placeholder="Enter Last Name ..."
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        
                      />
                      <label htmlFor="inputLastName">Last Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email address"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Phone ..."
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        
                      />
                      <label htmlFor="inputPhone">Phone</label>
                    </div>
                    <div className="form-label-group">
                      <FileBase
                        type="file"
                        multiple={
                          false
                        } onDone={({ base64 }) => setUser({ ...user, image: base64 })}
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                      onClick={(e) => { e.preventDefault(); dispatch(signup(user, history)) }}
                    >
                      Sign Up
                    </button>
                    <div className="text-center">
                      <Link to="/signin">Sign In</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
