import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = useSelector(state => state.userReducer.user)
  if (token && user.role===0) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/signup" />;
};

export default PrivateRouteUser;