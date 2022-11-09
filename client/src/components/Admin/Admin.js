import React,{ useState, useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import "./Admin.css"
import EditAdmin from './EditAdmin/EditAdmin';
import imageAdmin from '../../assets/admin.jpg'
import ListUser from './ListUsers/ListUser';
import { getAllUsers } from "../../js/Action/actionUser";
import ListCategory from './Category/ListCategory';
import { getAllCategory } from '../../js/Action/actionCategory';
import { getAllProduct } from '../../js/Action/actionProduct';
import ListProduct from './Product/ListProduct';
import { getAllOrder } from '../../js/Action/actionOrder';

import ListOrder from './Order/ListOrder';

const Admin = () => {
    const dispatch = useDispatch(); 
    const admin = useSelector((state) => state.userReducer.user);
    const [editadmin, setEditAdmin] = useState({
      firstName: '',
      lastName: '',
      email : '',
      phone : '',
      image : ''
  });
  useEffect(() => {
    setEditAdmin(admin);
    }, [admin])
  useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllCategory());
      dispatch(getAllProduct());
      dispatch(getAllOrder());
  }, [dispatch]);
    
    return (
        <div className="container emp-profile">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={editadmin.image ? editadmin.image : imageAdmin } alt="Admin"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Administrator
                                    </h5>
                                    <h6>
                                        Shopping Equipment Sport
                                    </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Users-tab" data-toggle="tab" href="#Users" role="tab" aria-controls="Users" aria-selected="false">Users</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Categorys-tab" data-toggle="tab" href="#Categorys" role="tab" aria-controls="Categorys" aria-selected="false">Categorys</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Products-tab" data-toggle="tab" href="#Products" role="tab" aria-controls="Products" aria-selected="false">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Order-tab" data-toggle="tab" href="#Order" role="tab" aria-controls="Order" aria-selected="false">Orders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <EditAdmin /> 
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{admin.firstName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{admin.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{admin.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone Number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{admin.phone}</p>
                                            </div>
                                        </div>
                            </div>
                            <ListUser />
                            <ListCategory />
                            <ListProduct />
                            <ListOrder />
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
}

export default Admin
