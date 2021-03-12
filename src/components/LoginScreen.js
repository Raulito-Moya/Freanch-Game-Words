import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useForm } from '../Hooks/useForm/useForm'
import { AuthContext } from './auth/AuthContext'
import { types } from './types/types'


 export const LoginScreen = ({history, location})=>{
  
  const {user,dispatch} = useContext(AuthContext)

   const[{loginValue},handleInputChange] = useForm({
       loginValue:''
   })

   /*useEffect(()=>{
     localStorage.setItem()
   },[])*/


const handleLogin = (e) => {
  
  const action = {
       type: types.login,
       payload:{
         name:'Raul'
       }
    }

  

    dispatch(action)


    
    if(user.name === loginValue){ //debe registrarse
       history.replace('/')
    }
       
    
    
}


return(
    <div>
        <h1>Login Screen</h1>
        <form >
          <input placeholder="escriba su usuario" className="form-control" type="click" name="loginValue" value={loginValue} onChange={handleInputChange}/>
          <button type="click" className="btn btn-primary" onClick={handleLogin} >Login</button>
        </form>
    </div>
)


}