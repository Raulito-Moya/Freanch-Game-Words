import React from 'react'
import Card from './Card'
import yogaexercise from '../images/yoga1.png'
const ExerciseList=(props)=>(
     
    <div>
    {
    props.exercises.map((exercise)=>{ //map lo que hace es iterer cada elemetno del array
        return(
          <Card 
          key={exercise.id}
          title={exercise.title}
          descripcion={exercise.description}
          img={yogaexercise}
           />
        )
     })}
</div>
      
)


/*function ExerciseList(props){
      return(
          <div>
                  {
                  props.exercises.map((exercise)=>{ //map lo que hace es iterer cada elemetno del array
                      return(
                        <Card 
                        title={exercise.title}
                        descripcion={exercise.descripcion}
                         />
                      )
                   })}
          </div>
      )
}*/

export default ExerciseList