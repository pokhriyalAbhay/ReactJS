import React,{useContext,useState} from "react";
import UserContext from "../context/UserContext";
function Login()
{
    const [username,setUsername] = useState('')
    const [passsword,setPassword] = useState('')
    const{setUser} = useContext(UserContext) // hmm yaha par useContext ke andar usercontext de rakha hain,usercontext se setuser ka access mil raha hain 
    const handleSubmit = (e)=>{
        e.preventDefault() // yeh is kiya by default jab bhi aap submit karte ho toh value url ki through kahi na kahi chali jati hain wo nahi chahta wo jaye 
        setUser({username,passsword}) // yaha hamne data toh bhej diya 
    }
    return(
        <div>
            <h2>login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder="username"/>
            {" "}
            <input type="text"
            value={passsword}
            onChange={(e)=>{setPassword(e.target.value)}}
             placeholder="password"/>
            <button onClick={handleSubmit}>sumbit</button>


        </div>
    )

}
export default Login;