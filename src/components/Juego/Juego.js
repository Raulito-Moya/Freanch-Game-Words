import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {getFetchWords, getWords, getSortWords} from '../../actions/words'


 const PopularWords = 'Bonjour,ca va,merci,au revoir,bonne tard ,bonne nuit,a demain,s il vous plait,la vouture,la maison,enfant,le homme,la famme,le garcon '
// const verbosDelGrupoE = 'amiti,bonheur,comme,courir,marcher,sauter,regarder,respirer,entendre,sauter,nager, manger, boire, cuisiner, utiliser, dormir, saluer, descendre, monter' //los mezcle arriba
 //const verbosDelGrupoI = 'Grosir,reflechir,choisir,definir,sortir,rire,*Je recois tu recois il obtient nous obtenons ils obtiennent, *je dor tu  dors il dort nous durmons ils durment'
 const sustantivosdeUsofrecuente = ''
 const adjetivosdeUSofrecuente = ''




const Juego = () => {

    const dispatch = useDispatch();
    const { words } = useSelector(state => state.words);
    const { wordsSort } = useSelector(state => state.words);
       
     let wordList = []
       
       useEffect(()=> {
         console.log('palabras');

         dispatch(getFetchWords())

       },[])


      const verbsGroupE = words.verbsGroupE;
      const verbsGroupI = words.verbsGroupI;
      const usefulNouns = words.usefulNouns;
      const usefulAdjectives = words.usefulAdjectives;

      const verbsEArray = verbsGroupE.split(',')  
      const verbsIArray = verbsGroupI.split(',')
      const nounsArray = usefulNouns.split(',')
      const adjectivesArray = usefulAdjectives.split(',')
    
       
      const wordsSum = verbsEArray + verbsIArray + nounsArray + adjectivesArray //se suman todas las palabras de la base de datos
     

      const arrayTotal = wordsSum.split(',')
   
       const SortingWords = () => {
          
         wordList = arrayTotal.sort( function(){  //va a tirar las palabras regadas
              return Math.random() - 0.5
          });
          console.log(wordList)
         dispatch(getSortWords(wordList))

       }
        
 

         const recarga = (e) => {
            e.preventDefault()
            
              SortingWords() 
         }
       
        
        if(wordsSort.length === 0) {
             return(
               <div className='juego'>
                 <h1>No hay palabras por favor recargue</h1>
                 <button type="click" className="btn btn-primary" onClick={recarga}> refrescar</button>
               </div>  
              )
         } 


         return (
             <div className='juego'>
                  <ul className='gameList'>
                     <li>{ wordsSort[0] }</li>
                     <li>{ wordsSort[1] }</li>
                     <li>{ wordsSort[2] }</li>
                     <li>{ wordsSort[3] }</li>
                     <li>{ wordsSort[4] }</li>
                 </ul>
              <button type="click" className="btn btn-primary" onClick={recarga}> refrescar</button>
              <button type="click" className="btn btn-dark">Aprendido</button>
             </div>
         )

}

export default Juego