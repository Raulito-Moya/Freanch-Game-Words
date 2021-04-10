import { types } from "../types/types"



const initialState = {
    auth:null
  
}

export const authReducer = (state = initialState, action)=> {

  switch (action.type) {
      case types.login:
          return {
              ...initialState,
              auth:true,
              userName: action.payload.userName,
              uid: action.payload.uid,
              email: action.payload.email
          }
          
          case types.logout:
              return {
                  ...initialState,
                  auth:false,
              }

  
      default:
           return state
  }



}