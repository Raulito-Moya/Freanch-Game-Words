
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

/*export const postFetchWords = ( wordType, word ) => {
  return (dispatch) => {

    
  //escribir en la database , ojo sustituye todo por el nuevo elemento
    db.ref(wordType).set(word)

  }

}*/


export const updateFetchWords = (path, wordsWriten) => {
   return (dispatch, getState) => {

   // var newPostKey = db.ref().child('ejemplo').push().key;  //esto lo que hace es generarme una key que no se para que es
      const {words} = getState().words
      const ej = words[path]
     const postData = 'hihi' // todo: poner las palabras actualesmas las nuevas 
      console.log(words[path]);
     var updates = {};
     updates[`/Words/${path}`] =  words[path] + ',' + wordsWriten;
       
     dispatch(updatedWords(updates))

     return db.ref().update(updates)
                .catch( (e)=> { console.log(e);} );


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


export const updatedWords = (words) => ({
  
  type: types.wordsUpdated,
  payload: words

})





