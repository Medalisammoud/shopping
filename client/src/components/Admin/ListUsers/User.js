
import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { updateUser } from "../../../js/Action/actionUser";

const User = ({user,i}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(user.activeUser)
  }, [user])
  const handleUser=()=>{
    dispatch(updateUser(user._id,{activeUser : !active}))
    setActive(!user.activeUser)
  }
  return (
    <tbody>
    <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0">{user.firstName}</h5>
      </td>
      <td>
        <span className="text-muted">{user.lastName}</span>
      </td>
      <td>
        <span className="text-muted">{user.email}</span>
      </td>
      <td>
        <span className="text-muted">{user.phone}</span>
      </td>
      <td>
        <span className="text-muted">{user.role===1 ? "Admin" : "User"}</span>
      </td>
      <td>
      {!active ?
        <Button variant="outline-success" onClick={handleUser}>Activate</Button>
        : <Button variant="outline-danger" onClick={handleUser}>Deactivated</Button>
        }
      </td>
    </tr>
    </tbody>
  );
};

export default User;
