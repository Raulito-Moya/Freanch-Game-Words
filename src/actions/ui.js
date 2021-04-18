import { types } from "../types/types";


export const setError = (error) => ({
   
    type: types.setError,
    payload: error
})


export const setLoading = () =>({

    type: types.setLoading
    
})


export const finishLoading = () => ({

    type: types.finishLogin
})



  
