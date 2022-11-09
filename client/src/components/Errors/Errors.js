import React from "react";
import { useDispatch } from "react-redux"
import { videErrors } from "../../js/Action/actionUser";

const Errors = ({error}) => {
  const dispatch = useDispatch();
  setTimeout(function () {
    dispatch(videErrors())
  }, 3000)
  return <div style={{height:"40px",width:"200px",fontSize:"13px"}} className="alert alert-danger" role="alert">{error.msg}</div>
      
  
};

export default Errors;