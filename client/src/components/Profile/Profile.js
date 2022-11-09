import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { updateUser } from "../../js/Action/actionUser";
import imageUser from '../../assets/user.jpg'

import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [edituser, setEditUser] = useState({
      firstName: '',
      lastName: '',
      email : '',
      phone : '',
      image : ''
  });

  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setEditUser({ ...edituser, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">My Account</h2>
          <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
            </ul>
            <form>
              <div className="row mt-2 align-items-center">
                <div className="col-md-12 text-center mb-2">
                  <div className="avatar avatar-xl ">
                    <img
                      src={edituser.image ? edituser.image :imageUser }
                      alt="user"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </div>
                </div>
                {edit && <div className="col-md-12 text-center">
                    <FileBase
                        type="file"
                        multiple={
                          false
                        } onDone={({ base64 }) => setEditUser({ ...edituser, image : base64 })}
                      />
                </div>}
                
                <hr className="my-4"/>
                <div className="row mt-2 align-items-center">
                <div className="col">
                    <div className="col-md-14">
                      <h5 className="mb-1">First Name : </h5>
                      <h5 className="mb-1">Last Name : </h5>
                      <h5 className="mb-1">Email : </h5>
                      <h5 className="mb-1">Phone :</h5>
                    </div>
                </div>
                <div className="col">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <p className="mb-1">{user.firstName}</p>
                      <p className="mb-1">{user.lastName}</p>
                      <p className="mb-1">{user.email}</p>
                      <p className="mb-1">{`+216 ${user.phone}`}</p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success btn-md rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={()=>setEdit(!edit)} ><i className="fa fa-edit"></i></button>
              </div>
              <hr className="my-4" />
              
                {
                  edit && 
                <>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    name="firstName"
                    value={edituser.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastname">LastName</label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    name="lastName"
                    value={edituser.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  value={edituser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputphone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputphone"
                  name="phone"
                  value={edituser.phone}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(updateUser(user._id, edituser));
                  setEdit(false);
                }}
              >
                Save Change
              </button>
              </>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
