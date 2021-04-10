import React from 'react'
import { useSelector } from 'react-redux'

import Juego from '../components/Juego/Juego'
import {FormGame} from '../components/Juego/FormGame'
import { AddWords } from '../components/Juego/AddWords'



 export const Jugar =()=>{
       
  const { uid } = useSelector(state => state.auth)

         return (
             <div >
                <FormGame/>
                { uid === 'ChWCDYaPX5f2cP8oou0MnTymE1C3' && <AddWords/> }
                <Juego/>
              
             </div>
             )


}

 

