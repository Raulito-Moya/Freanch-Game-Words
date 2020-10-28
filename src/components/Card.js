import React from 'react';

import './styles/Card.css'
import watch from '../images/watch2.jpg'
import yoga2 from '../images/yoga2.jpeg'
import vacio from '../images/vacio.png'

const Card=({title,description,img,leftcolor,rightcolor})=>
  (
    <div className="card mx-auto Fitness-Card" 
    style={{background:` linear-gradient(to left, #617BFB, #A74CF2);`}}> 
        <div className="card-body">
          <div className="row center">
           <div className="col-6">
             <img src={img} className="float-left" />
            </div>
             <div className="col-6 Fitness-Card-Info"  >
             <h1 >{title}</h1>
                <p>{description}</p>
             </div>
           </div>
         </div>
    </div>

)
//SE CONVIRTIO EL COMPONENTE A FUNCIONAL


/*class Card extends React.Component{

 /* constructor(props){
    super(props) //herredar de la clase principal
    this.state={
      image:watch
    }
  }
  
   componentDidMount(){ //cuando el componente se monte
     setTimeout(()=>{
        this.setState({
          image:yoga2
        })
     },5000)
   } //ejercicio del estado

    render(){
      const {title,description,img,leftcolor,rightcolor}=this.props;//manera rapida de declarar props
        return (
         <div className="card mx-auto Fitness-Card" 
         style={{background:` linear-gradient(to left, #617BFB, #A74CF2);`}}> 
             <div className="card-body">
               <div className="row center">
                <div className="col-6">
                  <img src={img} className="float-left" />
                 </div>
                  <div className="col-6 Fitness-Card-Info"  >
                  <h1 >{title}</h1>
                     <p>{description}</p>
                  </div>
                </div>
              </div>
         </div>

     )
    }
}*/

export default Card