import React, { useState } from 'react'


const Juego = () =>{

     const[show,setShow] = useState({})


    const frances=['Bonjour','ca va','merci','au revoir','bonne tard ','bonne nuit','a demain','s il vous plait','la vouture','la maison','enfant','le homme','la famme','le garcon']
    const verbosDelGrupoE = 'amiti,bonheur,comme,courir,marcher,sauter,regarder,respirer,entendre,sauter,nager, manger, boire, cuisiner, utiliser, dormir, saluer, descendre, monter' //los mezcle arriba
    const verbosDelGrupoI = 'Grosir,reflechir,choisir,definir,sortir,rire,*Je recois tu recois il obtient nous obtenons ils obtiennent, *je dor tu  dors il dort nous durmons ils durment'
     const sustantivosdeUsofrecuente =''
     const adjetivosdeUSofrecuente =''


    
      const arraydeVerbosE = verbosDelGrupoE.split(',')    //usar split para llevar el texto a array en el caso de que se quiera poner muchas palabras en un array  
      const arraydeVerbosI=verbosDelGrupoI.split(',')

     const sumadePalabras=frances+arraydeVerbosE+arraydeVerbosI //se suman todas las palabras de la base de datos
      const arrayTotal=sumadePalabras.split(',')


      console.log(arrayTotal)
      console.log(arrayTotal.length)
  
  
          const listadePalabras=arrayTotal.sort(function(){  //va a tirar las palabras regadas
              return Math.random()-0.5
          });
          console.log(listadePalabras)

         /* const contenido=document.getElementById('lista');
           const lista=document.createElement('ul');*/
         
          

         // const valores=`<li>${listadePalabras[0] }</li>  <br/> <li>${listadePalabras[1] } </li> <br/> <li>${listadePalabras[2] } </li> <br/>  <li>${listadePalabras[3] }</li>  <br/>  <li>${listadePalabras[3] }</li>  <br/> `;

         function recarga(){
             
         return  window.location.reload()
        
         }
        


         return <div>
             <div className='juego'>
                  <ul className='gameList'>
                     <li>{listadePalabras[0]}</li>
                     <li>{listadePalabras[1] }</li>
                     <li>{listadePalabras[2] }</li>
                     <li>{listadePalabras[3] }</li>
                     <li>{listadePalabras[4] }</li>
                 </ul>
              <button type="buttom" onClick={recarga}> refrescar</button>
             </div>
         </div>

}

export default Juego