import React,{useContext} from 'react'
import {BrowserRouter as Router,
        Route,
        Switch ,
        Redirect } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoginScreen } from '../LoginScreen'
import {NavBar} from './NavBar'
import {DashboardRoutes} from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRoute = ()=>{ 

    const {user} = useContext(AuthContext)

    const islogged = user.logged
  //  console.log(islogged)


    return(
    <Router>  
      <div>
     
      <Switch> 
       <PublicRoute exact path="/login" component={LoginScreen}  islogged={islogged}/> 
       <PrivateRoute path="/" component={DashboardRoutes}  islogged={islogged}/>
      </Switch>
    
      </div>  
    </Router>
    )

}
    


