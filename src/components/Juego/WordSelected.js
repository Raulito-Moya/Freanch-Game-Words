import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { animateButton } from '../../helpers/animations';
import { traductorCheckWord, traductorWords } from '../../actions/words'


export const WordSelected = ({word}) => {
   
    const dispatch = useDispatch();
    const { words, wordTranslated } = useSelector(state => state.words);
    const [select, setselect] = useState(false)
    //todo: queda disparar la accion y hacer las comparaciones para coloca la plabra traduccida una sola vez
    
    const handleclick = (e) => {
         
        console.log(word);
        setselect(true)
    }

    const handleTranslate = async() => {
  
       dispatch(traductorWords(word))

        //dispatch(traductorCheckWord(wordTranslated))   
    }
   
  
     var bubblyButtons = document.getElementsByClassName("bubbly-button");
      for (var i = 0; i < bubblyButtons.length; i++) {
         bubblyButtons[i].addEventListener('click', animateButton, false);
       }

  

  return(
      <div className='words row'>
          <div col-6>
               <h1 onClick={handleclick}> {word} </h1>
              
          </div>
          
           {  
             select 
              && 
            <div className='translateButton col-6'>
                <button className="bubbly-button"  type="click" onClick={handleTranslate}>traducir</button>  
            </div>
            }
      </div>
  )




}

