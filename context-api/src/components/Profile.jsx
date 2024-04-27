import { useContext,useState } from "react";
import React from "react";
import UserContext from "../context/UserContext";
function Profile()

{
    const{user} = useContext(UserContext)
    if(!user) return <div>please Login</div>

    return <div>welcome  {user.username}</div>


}
export default Profile;