import { types } from "../types/types"



const initialState ={
    auth:false
}

export const authReducer = (state =initialState, action)=> {

  switch (action.type) {
      case types.login:
          return {
              ...initialState,
              auth:true,
              userName:action.payload.userName,
              password:action.payload.password
          }

          case types.logout:
              return {
                  ...initialState,
                  auth:false,
                  name:action.payload.name
              }
        
  
      default:
           return state
  }



}