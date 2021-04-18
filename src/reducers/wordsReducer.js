import { types } from "../types/types"




const initState ={
  words: {
    popularWords: 'ejemplo',
    verbsGroupE: 'ejemplo',
    verbsGroupI: 'ejemplo',
    usefulNouns: 'ejemplo',
    usefulAdjectives: 'ejemplo'
  },
  wordsSort: [],
  wordsUpdated: [],
  wordTranslated: 'palabra traducida',
  
} 


export const wordsReducer = (state = initState, action ) => {

   switch (action.type) {
       case types.activeWords:
           return {
             ...state,
             words: action.payload
           }

       case types.activeSortWords:
         return {
           ...state,
           wordsSort: action.payload,
           wordTranslated: 'palabra traducida'
         }    
           
       case types.wordsUpdated:
         return {
           ...state,
           wordsUpdated: action.payload
         }    


       case types.translatedWord:
         return {
           ...state,
           wordTranslated: action.payload
         }  

       
   
       default:
          return state
   }



}