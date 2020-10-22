import React from 'react'

//componentes en la pagina
import ExerciseList from '../components/ExercisesList'
import Welcome from '../components/Welcome'
import Button from '../components/Button'


class Exercises extends React.Component{
    constructor(props){
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
    }
      render(){
          return(
              
            <div>
               <Welcome username="Raúl"/>
           <ExerciseList exercises={this.state.data}/>
           <Button/>
             </div>
             
           
              
          )
      }
}

export default Exercises 