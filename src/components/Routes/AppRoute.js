import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,
        Switch  } from 'react-router-dom';
import { LoginPresentation } from '../Login/LoginPresentation';
import { LoginScreen } from '../Login/LoginScreen';
import {DashboardRoutes} from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRoute = ()=>{ 

    const {auth} = useSelector(state => state.auth)
    
 //console.log(state);
    const islogged = auth


    return(
    <Router>  
      <Switch> 
    
       <PublicRoute  path="/loginIntro" component={LoginPresentation}  islogged={islogged}/> 
       <PrivateRoute  path="/" component={DashboardRoutes}  islogged={islogged}/>  
      
      </Switch>
     </Router>
    )

}
    


