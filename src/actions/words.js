import { db } from "../firebase/firebase-config"
import { types } from "../types/types"

export const getFetchWords = () => {
   return (dispatch) => {

         //buscar una sola vez
          db.ref("Words").get().then( (snapshot) => {
            if ( snapshot.exists() ) {
               return dispatch(getWords(snapshot.val())) 
                 
            } else {
               console.log("no data available");
            } 
        
         }).catch( (error) => {
           console.log(error);
         })
        
  }
    
} 

export const postFetchWords = ( wordType, word ) => {
  return (dispatch) => {

    
  //escribir en la database , ojo sustituye todo por el nuevo elemento
    db.ref(wordType).set(word)

  }

}




export const getWords = (words) => ({
  
  type: types.activeWords,
  payload: words 

})


export const getSortWords = (words) => ({

  type: types.activeSortWords,
  payload: words

})


export const writeWords = (words) => ({
  
  type: types.writeWords,
  payload: words

})





