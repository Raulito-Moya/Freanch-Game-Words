import React from 'react'

import Fatalerror from './500'
import  ExercisesNew from './ExercisesNew';
import url from '../config'

class ExercisesNewContainer extends React.Component{
  
     state={
         form:{
            title:'',
            description:'',
            img:'',
            leftcolor:'',
            rightcolor:''
         },
         error:null,
         loading:false
     }

    handleChange=e=>{
        console.log(`${e.target.name}:${e.target.value}`)
    
      /*  let partialState={}
        partialState[e.target.name]=e.target.value
        this.setState(partialState);*/
        
        this.setState({ //se va creando el estado
            form:{
                ...this.state.form, //mantenga lo que ya tenia actualemente y si es nuevo que lo escriba
                [e.target.name]:e.target.value
            }
            
        })//este pedacito va a sustituir a lo de arriba usando babel
        console.log(this.state)
    }


    handleSubmit= async e=>{
        
       this.setState({
           loading:true
       })
       e.preventDefault() //para evitar que la pagina se recargue
        try{

            let config={
                method:'Post',
                headers:{
                    'Accept':'aplication/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }

           let res=fetch(`${url}/exercises`,config)
           let json=await res.json()
        
           this.setState({
            loading:false
            })

          this.props.history.push('/exercise')
        }catch(error){
            this.setState({
                loading:false,
                error
                })
        }
        console.log(this.state)
    }
    

render(){
    if(this.state.error)
    return  <Fatalerror />
    
    return <ExercisesNew
          form={this.state.form}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
         />
}
}

export default ExercisesNewContainer