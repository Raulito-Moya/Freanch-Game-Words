import React from 'react'
import { useSelector } from 'react-redux'


export const FormGame = () => {


//este componente va a ser elbuscador de palabras a la api de diccionario en el proyecto

  
  
  const handleSearch = (e) => {
     e.preventDefault()
    
  }

 return(
    <div>
      <form onSubmit={handleSearch}>
          <h1>Buscador de Palabras</h1>
          <input type="text" name="palabra" value=""/>
          <button type="click">Buscar</button>
      </form> 
      
    </div>
      
 )

    
}