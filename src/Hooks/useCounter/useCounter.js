import React from 'react'
import {useState} from 'react'

export const useCounter = ( initialState = 10) => { //el incial state es opcional si no recibe ningun valor
    
    const [counter, setCounter] = useState(initialState); //10



    const increment = () => { //aqi le envio un parametro
        setCounter(counter + 1)
    }

    const decrement = ( ) => {
        setCounter(counter - 1)
    }


    const reset = () => {
        setCounter(initialState)  
       
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
