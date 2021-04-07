import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/useForm/useForm';
import { StartRegisterWithEmailandPassword } from '../../actions/auth';
import validator from 'validator'
import { setError } from '../../actions/ui';

export const SignUpLogin = () =>{

    const dispatch = useDispatch()

    const[{name,email,password1, password2},handleInputChange] = useForm({
      name: '',
      email: '',
      password1: '',
      password2: ''
  })


  const handleSignIn = (e) =>{
     e.preventDefault()

     if(isValid()){
        dispatch(StartRegisterWithEmailandPassword(name, email, password1 ))
     }
    
  }


  const isValid = () => {
    if ( !validator.isAlpha(name)){
      dispatch( setError('Name is incorrect') )
      return false
    }
    else if ( !validator.isEmail(email)){
         dispatch(setError('Email is incorrect'))
         return false
    }
    else if ( !validator.isStrongPassword(password1, 
            { minLength: 8,minUppercase:1, minNumbers: 1,minSymbols: 1 }) || password1 !== password2){
      
      dispatch(setError('La contrsena debe tener al menos 8 digitos y debe tener una inicial mayuscula un numero y un simbolo'))
      return false
    };
     
    return true
  }



 return(
  <div>
     <form onSubmit={handleSignIn}> 
      <h1 className="mb-3"> Registrarse por favor</h1>

       <div className="mb-3">
         <input 
         placeholder="escriba su usuario" 
         className="form-control" 
         type="click" 
         name='name'
         value={name}
         onChange={handleInputChange}
          />
       </div>

       <div className="mb-3">
        <input 
         placeholder="escriba su email" 
         className="form-control" 
         type="click" 
         name="email"
         value={email}
         onChange={handleInputChange}
         />
      </div>

       <div className="mb-3">
          <input 
          placeholder="escriba su contrasena" 
          className="form-control" 
          type="password" 
          name="password1"
          value={password1}
          onChange={handleInputChange}
           />
       </div>

       <div className="mb-3">
         <input 
         placeholder="confirme su contrasena" 
         className="form-control" 
         type="password" 
         name="password2"
         value={password2}
         onChange={handleInputChange}
          />
       </div>
     
      <button type="click" className="btn btn-primary">Login</button>

      <Link className="btn btn-dark" to="/loginIntro">Atras</Link>
    </form>
  </div>


 )



}