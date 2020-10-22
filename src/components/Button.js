import React from 'react'
import boton from '../images/flecha.ico'
import './styles/Button.css'
import {Link} from 'react-router-dom'

const Booton=()=>( //codigo mas moderno
    <div >
    <Link to='/exercise/new' className='Button' > <img src={boton}/>
    </Link>
 </div>

)


 /*function Booton(){
    return(
        <div >
           <Link to='/exercise/new' className='Button' > <img src={boton}/>
           </Link>
        </div>
        
    )
 }*/

export default Booton