import React from 'react'
import './styles/estilos.css'
import bandera from '../images/France.png'


const Info=()=>{ 
    return( 
 <div className='general'>
     <div className='imagen'> 
         <img src={bandera} alt="Bandera"/>
     </div>
      <div className='descripcion'>
       <h1>Hello my friends here  I will go to do a aplication for study much easy about words ,the app build 5 words in freanch lenguage</h1> <br/>
       <h3>My name is Raul and I'am soo happy you are here with me</h3>
       </div>
 </div>
)
}

export default Info