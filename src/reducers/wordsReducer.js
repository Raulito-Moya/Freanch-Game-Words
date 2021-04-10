import { types } from "../types/types"




const initState ={
  words: {
    verbsGroupE: 'ejemplo',
    verbsGroupI: 'ejemplo',
    usefulNouns: 'ejemplo',
    usefulAdjectives: 'ejemplo'
  },
  wordsSort: []
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
           wordsSort: action.payload
         }    
           
           
   
       default:
          return state
   }



}