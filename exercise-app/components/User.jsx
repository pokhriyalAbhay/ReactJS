import React from "react";
import { useParams } from "react-router-dom";
function User(){
const parms = useParams()
    
        return(
        <>
            <div>
            <h1> my name is {parms.username}</h1>
            </div>
            
            </>
        )

    }
    export default User;