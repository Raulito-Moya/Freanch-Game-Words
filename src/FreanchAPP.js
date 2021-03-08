import React, { useReducer } from 'react'
import { AuthContext } from './components/auth/AuthContext';
import { AuthReducer } from './components/auth/AuthReducer';
import { AppRoute } from "./components/Routes/AppRoute";


export const FreanchAPP = () => {


const [user,dispatch] = useReducer(AuthReducer,{})

return(
    <AuthContext.Provider value={ {user,dispatch }}>
      <AppRoute/>
    </AuthContext.Provider>
   
)


}