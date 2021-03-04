import React from 'react'
import { Link } from "react-router-dom"


 export const LoginScreen = ({history})=>{
     
const handleLogin = () => {
   console.log(history)
   history.replace('/')

}


return(
    <div>
        <h1>Login Screen</h1>
        <form className="form-control">
          <input type="" name="" value=""/>
          <input type="" name="" value=""/>
          <button type="click" className="btn btn-primary" onClick={handleLogin} >Login</button>
        </form>
    </div>
)


}