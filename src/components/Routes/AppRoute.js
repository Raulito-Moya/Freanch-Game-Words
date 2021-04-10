import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router,
        Switch  } from 'react-router-dom';
import {firebase} from '../../firebase/firebase-config'

import { auth } from '../../actions/auth';
import { finishLoading, setLoading } from '../../actions/ui';
import { LoginPresentation } from '../../pages/LoginPresentation';
import { LoginScreen } from '../Login/LoginScreen';
import {DashboardRoutes} from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




export const AppRoute = ()=>{ 

    const dispatch = useDispatch();
    //const {auth} = useSelector(state => state.auth)
    const { loading } = useSelector(state => state.ui)


    const [ islogged, setisLogged ] = useState(false)
     
    //console.log(state);
      // const islogged = auth
     

    useEffect(()=>{  
       dispatch(setLoading())
       firebase.auth().onAuthStateChanged(async (user) => {
        
          if(user?.uid){ 
             setisLogged(true)
            dispatch(auth(user.displayName,user.uid, user.email))
           }else{
             setisLogged(false)
           }
         dispatch(finishLoading())
       })
      
     
    },[])

     
    if (loading) {
     return( <h1>Loading...</h1>)    
    }

    return(
    <Router>  
      <Switch> 
    
        <PublicRoute  path="/loginIntro" component={LoginPresentation}  islogged={islogged}/> 
        <PrivateRoute  path="/" component={DashboardRoutes}  islogged={islogged}/>  
        
      </Switch>
     </Router>
    )

}
    


