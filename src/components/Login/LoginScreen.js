import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { auth } from '../../actions/auth'
import { useForm } from '../../Hooks/useForm/useForm'




 export const LoginScreen = ({history, location})=>{
  

   const dispatch = useDispatch();
  
   const[{loginValue,passwordValue},handleInputChange] = useForm({
       loginValue:'',
       passwordValue:''
   })




const handleLogin = (e) => {
 // e.preventDefault()
   
  dispatch(auth(loginValue, passwordValue))

  /* if(user.name === loginValue){ //debe registrarse
       
     // history.replace('/')
    }*/
       
    
}


return(
    <div>
        <h1>Login Screen</h1>
        <form onSubmit={handleLogin} >
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input 
              placeholder="escriba su usuario" 
              className="form-control" 
              type="click" 
              name="loginValue" 
              value={loginValue} 
              onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
             <label className="form-label">contrasena</label>
             <input 
              placeholder="escriba su contrasena" 
              className="form-control" 
              type="click" 
              name="passwordValue" 
              value={passwordValue}
              onChange={handleInputChange}
              />
          </div>
         
          <button 
            type="submit" 
            className="btn btn-primary"  
             >Login</button>

             <Link className="btn btn-dark" to="/loginIntro">Atras</Link>
        </form>
    </div>
)


}