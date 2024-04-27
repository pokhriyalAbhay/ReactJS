import React from "react";
 const UserContext = React.createContext() // yaha pe hamne ek context banaya han or usko ek variable mai store krra diya hian 
 export default UserContext;
 //jab hmne context banaya toh yeh hmme ek major chij dega provider, Context hai kya variable hi toh provide karat hain 
 // har ek context provider hain UserContext bhi ek provider hain  isme wrapper layenge jaise fragment mai lagta hain 
 //<>  </> aase
 // example
 //<UserContext>
//<Login/>
//<Card>
  //  <Data/>
//</Card>
 //</UserContext>
 // matlab ab UserContext ek provider ban jayega ab iske andar ke saare component ko global UserContext aa access mil jayega 
 