import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { authlogout } from '../../actions/auth'


export const NavBar = () => {

 const dispatch = useDispatch();
 const {userName} = useSelector(state => state.auth)
   
  
   const handleClick = () => {
    
     dispatch(authlogout())        
      
   }

   
    return(  
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

             <div className="navbar-brand ">
              <p className="nav-item nav-link text-info "> {userName}</p>
              <button 
                   type="click" 
                   className='btn btn-primary' 
                   onClick={handleClick}>
                   Logout
              </button>
            </div>
          </div>
        </nav>
    

)


}