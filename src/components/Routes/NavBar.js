import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

export const NavBar = ({history}) => {

 const {dispatch} = useContext(AuthContext)

   const handleClik = () => {
    
     const action = {
       type:types.logout,
       payload:{
         name:''
       }
     }  

     dispatch(action)
 
      history.replace('/login')
      
    
   }


    return(  <div>
       
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
       Presentacion
    </Link>
    <Link class="navbar-brand" to="/presentation/learnwords">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
       Juego
    </Link>
    <Link class="navbar-brand" to="/presentation/history">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
      Historia de Francia
    </Link>
      
      <button type="click" className='btn btn-primary' onClick={handleClik}>Logout</button>
  </div>
</nav>
    </div>

)


}