import { types } from "../types/types";


const initialState = {
  error: null,
  loading: false
}

 export const uiReducer = (state = initialState, action) => {

   switch (action.type) {
       case types.setError:
           return {
               ...initialState,
               error: action.payload
           }
           
        case types.setLoading:
          return {
            ...initialState,
            loading: true
          }
   
          case types.finishLogin:
            return {
              ...initialState,
              loading: false
            }

       default:
         return initialState
   }

}

