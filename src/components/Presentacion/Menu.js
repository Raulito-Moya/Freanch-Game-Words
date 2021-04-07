import React, { useState } from 'react'

import {Link} from 'react-router-dom' //la etiqueta link para darle ruta


const Menu = () => {




return (

<div className='generalmenu'>
  <h1>Elija lo que quiera aprender  </h1>
  <div className='descripcion'>
    <ul>
      <Link  to='presentation/learnwords' className='enlaces'>Aprenda Palabras en Frances</Link>
    </ul>
    <ul>
       <Link to='presentation/history'  className='enlaces'>Historia de Francia</Link>
    </ul>
  </div>
  </div>
)
}

export default Menu