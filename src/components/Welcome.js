import React from 'react'
import './styles/Welcome.css'

const Welcome=({username})=>( //quite eel props y puse la props que se ests recibiendo para hacaerlo mas sencillo 
    <div className='container'>
    <div className='Fitness-User-Info'>
        <h1>Hello {username}</h1>
        <p>Let's works to get someone gains!</p>
    </div>
</div>
       
)

/*function Welcome(props){ //si no se necesita trabajar con el estado o el ciclo de vida de un componente se pude usar un componente funcional
   return(
       <div className='container'>
           <div className='Fitness-User-Info'>
               <h1>Hello {props.username}</h1>
               <p>Let's works to get someone gains!</p>
           </div>
       </div>
   )
}*/

export default Welcome