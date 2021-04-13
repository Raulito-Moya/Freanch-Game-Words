import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { auth, startLoginWithEmailAndPassword } from '../../actions/auth'
import { useForm } from '../../Hooks/useForm'





 export const LoginScreen = ({history, location})=>{
  

   const dispatch = useDispatch();
  
   const[{name,email,password},handleInputChange] = useForm({
       name: '',
       email: '',
       password: ''
   })



const handleLogin = (e) => {
  e.preventDefault()
   
  dispatch(startLoginWithEmailAndPassword(email, password))

}

//Me quede modificado el LoginScreen para hacer match con la cuenta en firebase
return(
    <div>
        <h1>Login Screen</h1>
        <form onSubmit={handleLogin} >
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              placeholder="escriba su email" 
              className="form-control" 
              type="text" 
              name="email" 
              value={email}
              onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
             <label className="form-label">contrasena</label>
             <input 
              placeholder="escriba su contrasena" 
              className="form-control" 
              type="text" 
              name="password" 
              value={password}
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