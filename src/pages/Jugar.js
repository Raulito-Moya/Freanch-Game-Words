import React from 'react'
import { useSelector } from 'react-redux'

import Juego from '../components/Juego/Juego'
import {FormGame} from '../components/Juego/FormGame'
import { AddWords } from '../components/Juego/AddWords'



 export const Jugar = () => {
       
  const { uid } = useSelector(state => state.auth)

         return (
             <div className="container-fluid">
                <div className = 'row'>
                     <FormGame/>
                </div>
                 
                 
                <div className = 'row mt-3 mb-3'>
                  { uid === 'ChWCDYaPX5f2cP8oou0MnTymE1C3' 
                     && 
                    <AddWords/> 
                  }
                </div>
                
                <div className='row'>
                   <Juego/>
                 </div>
               
               
             </div>
          )


}

 

