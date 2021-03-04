import React from 'react'
import {BrowserRouter as Router,
        Route,
        Switch ,
        Redirect } from 'react-router-dom'
import { LoginScreen } from '../LoginScreen'
import {NavBar} from './NavBar'
import {DashboardRoutes} from './DashboardRoutes'

export const AppRoute = ()=>{ 
    return(
    <Router>  
    <div>
   
    <Switch> 
     <Route exact path="/login" component={LoginScreen} /> 
     <Route  path="/" component={DashboardRoutes} />
    </Switch>
  
    </div>  
    </Router>
    )

}
    


