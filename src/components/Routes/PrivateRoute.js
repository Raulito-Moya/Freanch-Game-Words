import React from 'react';
import {Route,Redirect} from 'react-router-dom'

export const PrivateRoute = ({
      islogged,
      component:Component,
      ...rest
     }) =>{

console.log(rest)

    return(
        <Route {...rest}
           component={(props)=>
                          (islogged) ? ( <Component {...props}/>)
                           : (<Redirect to="/login"/>) }/>


    )
}