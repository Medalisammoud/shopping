import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const admin= useSelector(state => state.userReducer.admin);
  if (token && admin) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRouteAdmin;