import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from './auth/AuthContext'
import { types } from './types/types'


 export const LoginScreen = ({history})=>{
  
  const {dispatch} = useContext(AuthContext)



const handleLogin = () => {
   console.log(history)
   history.replace('/')

     const action = {
       type: types.login,
       payload:{
         name:'Raul'
       }
    }

   dispatch(action)

}


return(
    <div>
        <h1>Login Screen</h1>
        <form >
          <input className="form-control" type="" name="" value=""/>
          <input className="form-control" type="" name="" value=""/>
          <button type="click" className="btn btn-primary" onClick={handleLogin} >Login</button>
        </form>
    </div>
)


}