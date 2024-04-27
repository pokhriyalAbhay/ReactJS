import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({children})=>
{
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>  
        {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;
// value ki help se hmm context se chijo ka access de sakte hain hmm object bhi pass kar sakte hain value={user,setUser