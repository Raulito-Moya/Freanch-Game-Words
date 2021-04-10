import {types} from '../types/types'
import {firebase} from '../firebase/firebase-config'
import { finishLoading, setError, setLoading } from './ui'


export const SignInWithEmailandPassword = () =>{

        

}


export const StartRegisterWithEmailandPassword = (name, email, password) => {

   return(dispatch) => {
 
      firebase.auth().createUserWithEmailAndPassword( email, password)
           .then( async({user}) => {
             
             await user.updateProfile({displayName: name}) 
             console.log(user);

            dispatch(auth(name, email))
           })
            .catch(e => {
              console.log(e);
              dispatch(setError(e.message))
           })

      //me quede aca arreglando el error
   }


}

export const startLoginWithEmailAndPassword = (email,password) => {
  
   return(dispatch)=>{
      dispatch(setLoading())
       firebase.auth().signInWithEmailAndPassword(email,password)
               .then(({user}) =>{
                  console.log(user);
                 
                dispatch(auth(user?.displayName, user?.uid, user?.email ))   
                dispatch(finishLoading())
               })
                .catch(e => console.log(e))

            
   }
}



export const StartLogout = () => {

 return(dispatch) => {
      firebase.auth().signOut()
      dispatch(authlogout())
 }

}


export const auth = (userName, uid, email) =>  ({
   
   type: types.login,
    payload:{
       userName,
       uid,
       email
    }
     
 })


export const authlogout = () =>({
  
    type: types.logout,
  
})


