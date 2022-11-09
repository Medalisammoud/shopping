import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";


import "./ListUser.css"
import User from "./User";

const ListUser = () => {
  
  const Users = useSelector((state) => state.userReducer.users);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setUsersData(Users)
  }, [Users]);
  return (
    <div
      className="tab-pane fade"
      id="Users"
      role="tabpanel"
      aria-labelledby="Users-tab"
    >
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium pl-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Disabled Account
                    </th>
                  </tr>
                </thead>
                
                  {!usersData.length ? <p style={{ marginTop:'10%', fontSize:"30px" }}>Loading...</p> :
                      usersData.map((user,i) => <User key={user._id} user={user} i={i} /> )
                  }
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
