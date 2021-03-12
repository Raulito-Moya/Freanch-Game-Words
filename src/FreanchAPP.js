import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/AuthContext';
import { AuthReducer } from './components/auth/AuthReducer';
import { AppRoute } from "./components/Routes/AppRoute";


export const FreanchAPP = () => {

 const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false}
  }

 const [user,dispatch] = useReducer(AuthReducer,{},init)


   useEffect(()=>{
     localStorage.setItem('user',JSON.stringify(user))
   },[user])



return(
    <AuthContext.Provider value={ {user,dispatch }}>
      <AppRoute/>
    </AuthContext.Provider>
   
)


}