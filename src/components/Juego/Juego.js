import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import {getFetchWords, getSortWords } from '../../actions/words'
import { WordSelected } from './WordSelected'



 const PopularWords = 'Bonjour,ca va,merci,au revoir,bonne tard ,bonne nuit,a demain,s il vous plait,la vouture,la maison,enfant,le homme,la famme,le garcon '
// const verbosDelGrupoE = 'amiti,bonheur,comme,courir,marcher,sauter,regarder,respirer,entendre,sauter,nager, manger, boire, cuisiner, utiliser, dormir, saluer, descendre, monter' //los mezcle arriba
 //const verbosDelGrupoI = 'Grosir,reflechir,choisir,definir,sortir,rire,*Je recois tu recois il obtient nous obtenons ils obtiennent, *je dor tu  dors il dort nous durmons ils durment'
 const sustantivosdeUsofrecuente = ''
 const adjetivosdeUSofrecuente = ''




const Juego = () => {

    const dispatch = useDispatch();
    const { words, wordTranslated } = useSelector(state => state.words);
    const { wordsSort } = useSelector(state => state.words);
    const [learned, setLearn] = useState(false)  
     
    
     let wordList = []
       
       useEffect(() => {
         console.log('palabras');

         dispatch(getFetchWords())
          
       },[])

       

      
      const popularWords = words.popularWords;   
      const verbsGroupE = words.verbsGroupE;
      const verbsGroupI = words.verbsGroupI;
      const usefulNouns = words.usefulNouns;
      const usefulAdjectives = words.usefulAdjectives;

      const popularWordsArray = popularWords.split(',');
      const verbsGroupEArray = verbsGroupE.split(',');
      const verbsGroupIArray = verbsGroupI.split(',')
      const usefulNounsArray = usefulNouns.split(',')
      const usefulAdjectivesArray = usefulAdjectives.split(',')

      const wordsSum = popularWordsArray + "," + verbsGroupEArray + "," + verbsGroupIArray + "," + usefulNounsArray + "," + usefulAdjectivesArray //se suman todas las palabras de la base de datos
      const arrayTotal = wordsSum.split(',')
      

       const SortingWords = () => {
          
         wordList = arrayTotal.sort( function(){  //va a tirar las palabras regadas
              return Math.random() - 0.5
          });
         
         dispatch(getSortWords(wordList))

       };
        


         const recarga = (e) => {
            e.preventDefault()
            
              SortingWords() 
              setLearn(false)
         }
       
         const handleLearn = () => {

          Swal.fire({
            title: 'Are you sure you learned these words',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Learned`,
            denyButtonText: `still not`,
          }).then( (result) => {
             if (result.isConfirmed) {
               
               Swal.fire('Learned! ', '', 'success')
               //setTimeout(()=>{
                 setLearn(true)
              // },2000)
             
            } else if (result.isDenied) {
              Swal.fire('OK ... continue', '', 'info')
              setLearn(false)
            }
          })

         } 
        
         
        if (wordsSort.length === 0) {
             return(
               <div className='juego'>
                 <h1>No hay palabras por favor recargue</h1>
                 <button type="click" className="btn btn-primary" onClick={recarga}> refrescar</button>
               </div>  
              )
         } 
    

         return (
             <div className='juego'>
                  <div className='gameList'>
                    { 
                      wordsSort.map(w => (wordsSort.indexOf(w) <= 4  )  
                        && 
                     <WordSelected key={w} word={w} /> )
                    
                    }
                  {
                    wordTranslated !== 'palabra traducida' && wordTranslated
                  } 
                 </div>
            
                {learned && <h1 className='animate__animated animate__heartBeat'>aprendido</h1>}
              <button type="click" className="btn btn-primary" onClick={recarga}> refrescar</button>
              <button type="click" className="btn btn-dark" onClick={handleLearn}> Aprendido </button>
             </div>
         )

}

export default Juego