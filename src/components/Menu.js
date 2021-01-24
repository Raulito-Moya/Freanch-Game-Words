import React from 'react'
import './styles/estilos.css'
import {Link} from 'react-router-dom' //la etiqueta link para darle ruta

class Menu extends  React.Component{

state={
  frase:'Aprende Frances'
  
}



changeSentence=e=>{
    this.setState({
        frase:'aprenda palabras nuevas en Frances'
    })
    console.log('funcioan el setState')
}



render(){
    
return  <div className='generalmenu'>
       <h1>Elija lo que quiera aprender  </h1>
       <div className='descripcion'>
           <ul>
             <Link to='presentacion/aprenderpalabras' className='enlaces' /*onFocus={this.setState({frase:'que hay'})}*/ >{this.state.frase}</Link>
           </ul>
           <ul>
               <Link to="presentacion/historia"  className='enlaces'>Historia de Francia</Link>
           </ul>
       </div>
    </div>
     
  }
}

export default Menu