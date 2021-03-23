import React, { useEffect, useReducer } from 'react'
import {Provider} from 'react-redux'
import { AppRoute } from "./components/Routes/AppRoute";
import { store } from './store/store';


export const FreanchAPP = () => {



return(
    <Provider store={ store }>
      <AppRoute/>
    </Provider>
   
)


}