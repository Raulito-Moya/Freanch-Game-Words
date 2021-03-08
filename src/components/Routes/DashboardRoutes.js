import React from 'react'
import {BrowserRouter,
         Route,
         Switch ,
         Redirect} from 'react-router-dom'
import {Jugar} from '../../pages/Jugar'
import {Presentacion} from '../../pages/Presentacion'
import {Historia} from '../../pages/historia'
import {NotFound} from '../../pages/NotFound'
import { NavBar } from './NavBar'

export const DashboardRoutes = ({history}) => {
    
   return(
     <>  
     
      <NavBar history={history}/> 
    <div className="container">
     <Switch>
       <Route exact path="/presentation" component={Presentacion}/> 
       <Route exact path="/presentation/learnwords" component={Jugar}/>
       <Route exact path="/presentation/history" component={Historia}/>
       <Redirect to="/presentation"/>
     </Switch>
    </div> 
    </>
    ) 
}