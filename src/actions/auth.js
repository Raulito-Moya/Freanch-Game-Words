import {types} from '../types/types'




export const auth = (userName, password) =>  ({
   
  type: types.login,
   payload:{
      userName,
      password
   }
    
})

export const authlogout = () =>({
  
    type: types.logout,
    payload:{
        name:false
    }

})