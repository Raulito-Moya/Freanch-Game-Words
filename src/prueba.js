import React, {Fragment} from 'react';
import './css/styles.css'
import icono from './css/images/favicon.png'

const Login = () => {
    return <Fragment >
        <section className="container"> 
   
   <div className="item">
     <img src={icono} alt="icono" className="icono">  
        <h1 className="titulo">  Eic's fitness</h1>
       </div>
   <div className="item">
       <ul className="lista">
           <a href="">home</a>
           <a href="">Blog</a>
           <a href="">aplicaion</a>
           <a href="">Login</a>
       </ul>
   </div>
   <div className="item"><img className="imgPrincipal" src="./images/banner-1200-592.jpg" alt="imagen principal de la presentacion"></div>
   <div className="item" >
       <h1 className="introForm">Login</h1>   
       
   </div>
  
<div className="item">
   <form className="formulario" action="" >
        <h1>Username:</h1> <input type="text" className="input1"> <br/>
        <h1>Password:</h1> <input type="text" className="input2">
        <button className="buttom" type="submit">Login</button>
   </form>
</div>
  <div className="item">
              <ul >
               <h1>Acerca de</h1>
               <li><a href="">Quienes Somos</a></li> 
              <li><a href="">Contactenos</a></li>  
              </ul>     
   </div>  
  <div className="item">
              <ul>
                <h1>Importante</h1>
                <li><a href="">Politica de Privacidad</a></li>
                <li><a href="">Terminos & Condiciones</a></li>
              </ul>
            </div>  
    <div className="item">
              <ul>
                <h1>Social</h1>  
                <li className="face">  Facebook</li>
                <li className="tele">Telegram</li>
                <li className="whats">Whatsapp</li>
              </ul>
            </div>
   <div className="item">
       <h1 className="h1Final">Eric's Fitness 2020</h1>
   </div>  
 </section>  
    </Fragment>
};

export default Login;