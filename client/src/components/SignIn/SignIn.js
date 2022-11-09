import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin, videErrors } from "../../js/Action/actionUser";
import Errors from "../Errors/Errors";
import "./SignIn.css";

const SignIn = ({ history }) => {
  const [user, setUser] = useState({email : '', password: ''});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
            {errors.length > 0 && <div style={{display:"flex"}}> {errors.map((el,i) => <Errors key={i} error={el} />)}</div> }
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        name="email"
                        value={user.email}
                        placeholder="Email address"
                        onChange={handleChange}
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                      onClick={(e) => { e.preventDefault(); dispatch(signin(user, history)) }}
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <Link to="/signup">Sign Up</Link>
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

export default SignIn;
