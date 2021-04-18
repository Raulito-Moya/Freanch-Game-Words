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
          <label>Buscador de Palabras</label>
          <input type="text" className="form-control" name="palabra" value=""/>
          <button type="buttom" className="btn btn-outline-info">Buscar</button>
      </form> 
      
    </div>
      
 )

    
}