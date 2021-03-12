import React from 'react'
import {useState, useEffect, useRef} from 'react'


export const useFetch = (url) => {
   
    const isMounted = useRef(true)
      const [state, setstate] = useState({data:null, loading:true, error:null})


     useEffect(() => {
          console.log(isMounted)
        return ()=>{     //se va disparar cuando el compoennte se desmonte ya que el return es una limpieza
            isMounted.current = false //caundo se demonte lo pase a false
            console.log(isMounted)
        }

      }, []) //que solo lo haga cuando el componente se carga po primera vez ,ya caundo se desmonta el componente pasa a falso
       

      useEffect(() => {
        setstate({ data:null,loading:true, error:null })  //esto lo pongo para que el loadingo coja estado antes de la carga por segunda vez
        
       fetch(url)
       .then( resp => resp.json())
       .then(data => {

       //  setTimeout(()=>{ //esto lo pngo para simular un error que me ayude a comprender el useFetch cuando al componente demontado al yo presionar el boton en RealExmpleRef se demonte el componente

            if( isMounted.current ){ //si esta en true entonces va a generar el estado
             setstate({
               loading:false,
               error:null,
               data
             })
            }
        // },4000)

         
       })
       .catch( () => {
          setstate({ 
            data:null, 
            loading:false, 
            error:'no se pudo guardar la informacion'
          })
       })
        
      }, [url])

      return state
}
