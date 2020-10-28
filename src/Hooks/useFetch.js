import {useState, useEffect} from 'react'  //como no estoy ocupando jsx no pongo import React
//Aqui lo que hago es crear un customHook para poder simplificar mas las cosas
const useFetch=url=>{
  
   //IMplementando el HOOK useState

    const[ data,setData ]=useState([])  //los argumentos de useState son para identificar el estado inicial
    const[ loading,setLoading ]=useState(true)
    const[ error,setError ]=useState(null)
  
    useEffect(()=>{  //useEffect es similar a componentDiMount
        
        const  fetchResource=async()=>{
              try{ //cuando se trabaj con asyn se usa el try
      
             let res=await fetch(url)
            let data= await res.json()
               
            setData(data)
            setLoading(false)
              } catch(error){
                  
                  setLoading(false)
                  setError(error)
              
              } 
      
           
          }
          fetchResource()
        },[url])

        return{data,loading,error}
}

export default useFetch