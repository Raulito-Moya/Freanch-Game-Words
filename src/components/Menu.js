import React, { useState } from 'react'
import './styles/estilos.css'
import {Link} from 'react-router-dom' //la etiqueta link para darle ruta


const Menu = () => {




return <div className='generalmenu'>
   
  <h1>Elija lo que quiera aprender  </h1>
  <div className='descripcion'>
    <ul>
      <Link to='presentacion/aprenderpalabras' className='enlaces'>Aprenda Palabras en Frances</Link>
    </ul>
    <ul>
       <Link to="presentacion/historia"  className='enlaces'>Historia de Francia</Link>
    </ul>
  </div>
  </div>

}

export default Menu