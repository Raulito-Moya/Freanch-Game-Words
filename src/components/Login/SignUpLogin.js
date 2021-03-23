import React from 'react';
import {Link} from 'react-router-dom'

export const SignUpLogin = () =>{


 return(
  <div>
    <h1> Registrate</h1>
     <form >
       <div className="mb-3">
        <input 
        placeholder="escriba su usuario" 
        className="form-control" 
        type="click" 
         />
       </div>
     
      <div className="mb-3">
        <input 
         placeholder="escriba su usuario" 
         className="form-control" 
         type="click" 
         />
      </div>
     
      <button type="click" className="btn btn-primary"  >Login</button>

      <Link className="btn btn-dark" to="/loginIntro">Atras</Link>
    </form>
  </div>


 )



}