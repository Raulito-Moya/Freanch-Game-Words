import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const PublicRoute = ({
         islogged,
         component:Component,
          
              }) =>{
    return(
       <Route component={(props) => (islogged===false) ? (<Component {...props}/>) : <Redirect to="/"/> }/>
    )

}