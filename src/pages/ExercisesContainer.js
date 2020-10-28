import React from 'react' //IMplementando el HOOK useState

//componentes en la pagina

import Loading from '../components/Loading'
import Fatalerror from './500'
import ExercisesPresentation from './ExercisesPresentation'
import useFetch from '../Hooks/useFetch'
import url from '../config'


const ExercisesContainer=()=>{  
 const{ data, loading, error}=useFetch(`${url}/exercises`)

  if(loading) //viene como propiedad de useFetch
return <Loading />
if(error)  
 return <Fatalerror />
 
return <ExercisesPresentation 
   exercises={data}/> //viene como propiedad de useFetch
}


export default ExercisesContainer

/*class ExercisesContainer extends React.Component{
   /* constructor(props){
        super(props)
        this.state={
            data:[
                {
                    "id":1,
                    "title":"Technoque Guides",
                    "descripcion":"lear amazing streets about calistenighs"
                },
                {
                    "id":2,
                    "title":"Skills Training",
                    "descripcion":"LEarn the secrets about calistenighs"
                },
                {
                    "id":3,
                    "title":"Strengh Training",
                    "descripcion":"Train everytiem an become a superhero"
                }]
        }
    }  //lo borre todo para hacerlo con la api

    state={
        data:[],
        loading:true,
        error:null
    }
   async componentDidMount(){
        await this.fetchExercises() 
    }
    
      fetchExercises=async()=>{
          try{ //cuando se trabaj con asyn se usa el try

         let res=await fetch('http://localhost:8000/api/exercises')
        let data= await res.json()

         this.setState({
             data,
             loading:false
             
         })

        console.log(data)
          } catch(error){
              
            this.setState({
                loading:false,
                error
                
            })
          } 

       
      }
      render(){
          if(this.state.loading)
            return <Loading />
          if(this.state.error)  
             return <Fatalerror />
             
          return(
               <ExercisesPresentation 
               exercises={this.state.data}/>
   
          )
      }
}*/ 

//export default ExercisesContainer 